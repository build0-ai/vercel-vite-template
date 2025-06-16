import { Router } from "@oak/oak";

export const healthRouter = new Router();

healthRouter.get("/", (ctx) => {
  ctx.response.body = {
    status: "healthy",
    timestamp: new Date().toISOString(),
  };
});
