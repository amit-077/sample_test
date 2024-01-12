const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.post("/getData", (req, res) => {
  console.log(req.body);
  const { data } = req.body.data;
  if (!data) {
    res.status(400).send();
  }
  res.status(200).send(data);
});

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
