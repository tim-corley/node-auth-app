const express = require("express");
const app = express();

const HOST = "0.0.0.0";
const PORT = 3003;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page.");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("❗There was an error trying to start the server.", err);
    return;
  }
  console.log(`\n ⚡ Server is up & running at: http://${HOST}:${PORT}`);
});
