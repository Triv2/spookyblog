import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export default authMiddleware({
  publicRoutes: ["/","/categories/:path*","/categories","/articles/:path*","/articles",]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
