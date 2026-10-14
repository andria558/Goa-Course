import { createServer, get } from "node:http"

const host = "localhost";
const port = 5173;

let server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
})

get(`http://${host}:${port}`, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Content-Type: ${res.headers["content-type"]}`);

  let body = "";
  res.on("data", (chunk) => { body += chunk; });
  res.on("end", () => {
    console.log(`Body: ${body}`);
  });
})


  server.listen(port, host, () => console.log(`server is runing at http://${host}:${port}`))
