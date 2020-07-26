import { Application, Router } from "https://linweiwei123.github.io/aok/mod.ts";
import { init } from './router.tsx';

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || "127.0.0.1";

const router = new Router();
init(router);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);

console.log("React SSR App listening on port 3000");