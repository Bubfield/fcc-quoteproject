const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  const response = await axios.get("https://zenquotes.io/api/quotes");
  res.json(response.data);
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
