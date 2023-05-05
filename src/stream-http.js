import http from "http";
import { createReadStream } from "fs";

const server = http.createServer((req, res) => {
  const file = createReadStream("./src/bigFile.txt", {
    encoding: "utf8",
  });

  file.on("data", (chunk) => {
    file.pipe(res);
  });

  file.on("error", (err) => {
    console.log(err);
  });
});

server.listen(3000);
console.log("server on port: " + server.address);
