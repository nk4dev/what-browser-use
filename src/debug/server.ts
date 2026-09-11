import { Hono } from "hono";
import path from "path";

const server = new Hono();

// server.ts が置かれているディレクトリ基準でパスを解決
server.get("/", (c) => {
  const filePath = path.resolve(import.meta.dir, "../../index.html");
  return c.body(Bun.file(filePath), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

server.all("/what-browser-use/ext", (c) => {
  return c.redirect("/ext", 301);
});

server.get("/ext", (c) => {
  const filePath = path.resolve(import.meta.dir, "../../ext/index.html");
  return c.body(Bun.file(filePath), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

export default server;
