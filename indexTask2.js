const http = require("http");
const fs = require("fs");

// define/extend the EventEmitter class
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

// initialize a new emitter object
const myEmitter = new MyEmitter();

// add listner for the read event (when files are read)
myEmitter.on("read", () => {
  console.log("File read!");
});

// add listener for the error event (when page cannot be found)
myEmitter.on("error", () => {
  console.log("Error!");
});

// add listener for the home event (when the home page is accessed)
myEmitter.on("home", () => {
  console.log("Home page");
});

const server = http.createServer((request, response) => {
  let path = "./views/";
  console.log(request.url);
  switch (request.url) {
    case "/":
      path += "index.html";
      console.log(path);
      response.statusCode = 200;
      fetchFile(path);
      myEmitter.emit("read");
      myEmitter.emit("home");
      console.log("Index");
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      fetchFile(path);
      myEmitter.emit("read");
      console.log("About");
      break;
    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      fetchFile(path);
      myEmitter.emit("read");
      console.log("Contact");
      break;
    case "/products":
      path += "products.html";
      response.statusCode = 200;
      fetchFile(path);
      myEmitter.emit("read");
      console.log("Products");
      break;
    case "/subscribe":
      path += "subscribe.html";
      response.statusCode = 200;
      fetchFile(path);
      myEmitter.emit("read");
      console.log("Subscribe");
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      fetchFile(path);
      myEmitter.emit("error");
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

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000.");
});
