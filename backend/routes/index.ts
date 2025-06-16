import { Router } from "@oak/oak";
import { apiRouter } from "./api/index.ts";

export const router = new Router();

router.use("/api", apiRouter.routes(), apiRouter.allowedMethods());
