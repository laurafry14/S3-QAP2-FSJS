const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  let path = "./views/";
  console.log(request.url);
  switch (request.url) {
    case "/":
      path += "index.html";
      console.log(path);
      response.statusCode = 200;
      fetchFile(path);
      console.log("Index");
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      fetchFile(path);
      console.log("About");
      break;
    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      fetchFile(path);
      console.log("Contact");
      break;
    case "/products":
      path += "products.html";
      response.statusCode = 200;
      fetchFile(path);
      console.log("Products");
      break;
    case "/subscribe":
      path += "subscribe.html";
      response.statusCode = 200;
      fetchFile(path);
      console.log("Subscribe");
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      fetchFile(path);
      break;
  }
  function fetchFile(path) {
    fs.readFile(path, function (err, data) {
      if (err) {
        console.log(err);
        response.end();
      } else {
        response.writeHead(response.statusCode, {
          "Content-Type": "text/html",
        });
        response.write(data);
        response.end();
        console.log("file was served.");
      }
    });
  }
});

server.listen(3030, "localhost", () => {
  console.log("Listening on port 3030.");
});
