const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { askBot } = require("./src/vertex_llm");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "web")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "web", "index.html"));
});

app.post("/chat", (req, res) => {
  const userInput = req.body.message;
  const response = askBot(userInput);
  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
