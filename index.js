const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  switch (request.url) {
    case "/":
      console.log("Index");
      break;
    case "/about":
      console.log("About");
      break;
    case "/contact":
      console.log("Contact");
      break;
    case "/products":
      console.log("Products");
      break;
    case "/subscribe":
      console.log("Subscribe");
      break;
    default:
      console.log("Error");
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000.");
});
