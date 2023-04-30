import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const isProduction = process.env.NODE_ENV === "production";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)"],
};

export const protectedSubdomains = ["admin", "app"];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request
  const hostname = req.headers.get("host") || "examplehost.com:4000";

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  const currentHost =
    isProduction && process.env.VERCEL === "1"
      ? hostname.replace(".vercel.pub", "") // Replace .vercel.pub with domain name when we deploy to production
      : hostname.replace(".examplehost.com:4000", "");

  const isProtected = protectedSubdomains.some(
    (subdomain) => subdomain === currentHost
  );

  if (isProtected) {
    const token = await getToken({ req });

    // redirect to login if no token
    if (!token) {
      const url = new URL(
        `/login`,
        isProduction
          ? process.env.NEXT_PUBLIC_PRODUCTION_HOME_URL
          : process.env.NEXT_PUBLIC_DEVELOPMENT_HOME_URL
      );

      // Encode the callbackUrl and add it to the searchParams so that the user will be redirected back to the page after login.
      // url.searchParams.set("callbackUrl", encodeURI(req.url));
      return NextResponse.redirect(url);
    }

    // rewrites for admin
    if (currentHost === "admin") {
      // user landed on the admin page but is not an admin
      if (token.role !== "admin") {
        const url = new URL(
          `/403`,
          isProduction
            ? process.env.NEXT_PUBLIC_PRODUCTION_HOME_URL
            : "http://examplehost.com:4000"
        );
        console.log(
          "urL: ",
          isProduction
            ? process.env.NEXT_PUBLIC_PRODUCTION_HOME_URL
            : process.env.NEXT_PUBLIC_DEVELOPMENT_HOME_URL
        );
        return NextResponse.rewrite(url);
      }

      // user landed on the admin page and is an admin
      return NextResponse.rewrite(
        new URL(`/sites/${currentHost}${path}`, req.url)
      );
    }

    // rewrite for app
    if (currentHost === "app") {
      console.log("app");
      return NextResponse.rewrite(
        new URL(`/sites/${currentHost}${path}`, req.url)
      );
    }
  }

  // rewrite root application to `/home` folder
  if (currentHost === "examplehost.com:4000") {
    console.log("home");
    return NextResponse.rewrite(new URL(`/home${path}`, req.url));
  }
}
