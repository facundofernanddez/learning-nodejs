import http from "http";

http
  .createServer((req, res) => {
    if (req.url === "/about") {
      res.write("About");
      return res.end();
    }

    res.write("hola");
    res.end();
  })
  .listen(3000);
