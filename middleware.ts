import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:["/sing-in"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};