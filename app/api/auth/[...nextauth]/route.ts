import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import { prisma } from "@helpers/prismaClient";
import bcrypt from "bcrypt";
import Stripe from "stripe";
import { getStripeSubTier } from "@helpers/stripe";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;
const useSecureCookies = process.env.NEXTAUTH_URL!.startsWith("https://");
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const hostName = new URL(process.env.NEXTAUTH_URL!).hostname;

const adapter = PrismaAdapter(prisma);

export const authOptions: AuthOptions = {
  adapter,
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
  events: {
    async signIn(message) {
      console.log("message", message);
    },
    async createUser(message) {
      console.log("CUSTOM EVENT createUser", message);
    },
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      const baseUrlHostname = new URL(baseUrl).hostname;
      const urlHostname = new URL(url).hostname.includes(".")
        ? new URL(url).hostname.split(".")[1]
        : new URL(url).hostname;

      if (url === "http://app.examplehost.com:4000") return url;
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (urlHostname === baseUrlHostname) return url;
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
    async jwt({ token, user }) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token, user }) {
      console.log("session", session, user);
      // const stripeSubTier = getStripeSubTier(
      //   user.stripeSubscriptionId as string
      // );

      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.role = token.role;
        session.user.stripeCustomerId = user.stripeCustomerId as string;
        // session.user.stripeSubTier = stripeSubTier as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        domain: hostName == "examplehost.com:4000" ? hostName : "." + hostName, // add a . in front so that subdomains are included
      },
    },
  },

  // events: {
  //   async createUser({ user }) {
  //     console.log("useasdasdasdr: ", user);
  //     // Create stripe API client using the secret key env variable
  //     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  //       apiVersion: "2022-11-15",
  //     });

  //     // Create a stripe customer for the user with their email address
  //     await stripe.customers
  //       .create({
  //         email: user.email!,
  //       })
  //       .then(async (customer) => {
  //         // Use the Prisma Client to update the user in the database with their new Stripe customer ID
  //         return prisma.user.update({
  //           where: { email: user.email },
  //           data: {
  //             stripeCustomerId: customer.id,
  //           },
  //         });
  //       });
  //   },
  // },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
