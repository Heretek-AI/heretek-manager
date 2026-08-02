import { createServer } from "./server.js";

const port = parseInt(process.env.PORT || "3847", 10);
const host = process.env.HOST || "localhost";

const server = createServer();

server.listen(port, host, () => {
  console.log(`heretek-manager running at http://${host}:${port}`);
});
