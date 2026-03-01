import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const API_KEY = "JIRa2GhGG1VKP8DdWr8uBsr1q6WbpGF3";

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [
        { role: "user", content: userMessage }
      ]
    })
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Serveur lancé sur port 3000");
});
