const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});

// // Import http library
// const http = require("http");
// // use env variable to define tcp/ip port with a default
// const PORT = process.env.PORT || 8080;
// //create our server object
// const server = http.createServer();
// // We define a function that runs in response a request event
// server.on("request", (request, response) => {
//   // handle request based on method then URL
//   response.statusCode = 200;
//   response.write("Hello World");
//   response.end();
// });
// // get the server to start listening
// server.listen(PORT, (err) => {
//   // error checking
//   err ? console.error(err) : console.log(`listening on port ${PORT}`);
// });
