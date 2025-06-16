import { Router } from "@oak/oak";
import { healthRouter } from "./health.ts";

export const apiRouter = new Router();

apiRouter.use("/health", healthRouter.routes(), healthRouter.allowedMethods());

apiRouter.get("/helloworld", (ctx) => {
  ctx.response.body = {
    message: "Hello World",
  };
});
