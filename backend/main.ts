import { Application } from "@oak/oak";
import { load } from "@std/dotenv";
import { router } from "./routes/index.ts";

await load({ export: true });

const app = new Application();
const port = Number(Deno.env.get("PORT")) || 3000;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });