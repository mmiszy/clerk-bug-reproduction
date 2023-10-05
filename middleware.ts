import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/static-route(.*)",
    "/dynamic-route(.*)", // error
  ]
})
