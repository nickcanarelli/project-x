import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import { prisma } from "@helpers/prismaClient";
import bcrypt from "bcrypt";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;
const useSecureCookies = process.env.NEXTAUTH_URL!.startsWith("https://");
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const hostName = new URL(process.env.NEXTAUTH_URL!).hostname;

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // if no email or password are provided, return null
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // check for the user in the db
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // if no user is found or if the password is irregular, return error
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        // compare the password with the hashed password
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // if the password is incorrect, return error
        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        // if the password is correct, success and return the user
        return user;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const baseUrlHostname = new URL(baseUrl).hostname;
      const urlHostname = new URL(url).hostname.includes(".")
        ? new URL(url).hostname.split(".")[1]
        : new URL(url).hostname;

      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (urlHostname === baseUrlHostname) return url;
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        domain: hostName == "localhost" ? hostName : "." + hostName, // add a . in front so that subdomains are included
      },
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
