import { createServer } from "node:http"

const host = "localhost";
const port = 5173;

let server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
})

server.listen(port, host, () => console.log(`server is runing at http://${host}:${port}`))
