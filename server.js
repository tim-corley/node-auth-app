const express = require("express");
const app = express();
const { users } = require("./data");
const { authUser } = require("./basicAuth");

const HOST = "0.0.0.0";
const PORT = 3003;

app.use(express.json());
app.use(setUser);
// app.use("/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Home Page.");
});

app.get("/dashboard", authUser, (req, res) => {
  res.send("Dashboard Page.");
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

app.listen(PORT, (err) => {
  if (err) {
    console.log("❗There was an error trying to start the server.", err);
    return;
  }
  console.log(`\n ⚡ Server is up & running at: http://${HOST}:${PORT}`);
});
