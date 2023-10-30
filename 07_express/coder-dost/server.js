const express = require("express");
const server = express();
const studentRouter = require("./routes/student");

//bodyParser
server.use(express.json());
// server.use(express.urlencoded);
server.use(express.static("public"));
server.use("/students", studentRouter.router);

server.use((req, res, next) => {
  console.log(
    req.url,
    req.method,
    req.hostname,
    new Date(),
    "\n",
    req.get("User-Agent")
  );
  next();
});

// server.get("/", (req, res) => {
//   res.send("Hello welcome to /root page");
// });

server.listen(8080, () => {
  console.log("server started");
});
