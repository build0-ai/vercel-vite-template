import { Application } from "@oak/oak";
import { load } from "@std/dotenv";
import { router } from "./routes/index.ts";

await load({ export: true });

const app = new Application();
const port = Number(Deno.env.get("PORT")) || 3002;

// API routes
app.use(router.routes());
app.use(router.allowedMethods());

// Serve static files from public directory
app.use(async (context, next) => {
  const { pathname } = context.request.url;

  // Skip API routes
  if (pathname.startsWith("/api")) {
    await next();
    return;
  }

  // Try to serve static file
  try {
    const filePath = `./public${pathname}`;
    const fileInfo = await Deno.stat(filePath);

    if (fileInfo.isFile) {
      const file = await Deno.readFile(filePath);
      const ext = pathname.split(".").pop();

      // Set appropriate content type
      const contentTypes: Record<string, string> = {
        html: "text/html",
        js: "application/javascript",
        css: "text/css",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        ico: "image/x-icon",
        json: "application/json",
      };

      context.response.headers.set(
        "Content-Type",
        contentTypes[ext || ""] || "application/octet-stream"
      );
      context.response.body = file;
      return;
    }
  } catch {
    // File doesn't exist, continue to SPA fallback
  }

  // SPA fallback - serve index.html for non-API routes
  try {
    const indexFile = await Deno.readFile("./public/index.html");
    context.response.headers.set("Content-Type", "text/html");
    context.response.body = indexFile;
  } catch {
    context.response.status = 404;
    context.response.body = "Not Found";
  }
});

console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });
