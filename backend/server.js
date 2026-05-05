// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🤖 SIMPLE AI LOGIC (MVP)
// function getReply(message) {
//   message = message.toLowerCase();

//   if (message.includes("ዋጋ")) {
//     return "ዋጋው 500 ብር ነው 💰";
//   }

//   if (message.includes("አለ")) {
//     return "አዎ አለ ✔️ ትዘዙ ይችላሉ";
//   }

//   if (message.includes("delivery")) {
//     return "Delivery በ1–2 ቀን ውስጥ ይደርሳል 🚚";
//   }

//   return "አልገባኝም 😅 እባክዎ በቀላሉ ይድገሙ";
// }

// // 📩 CHAT ROUTE
// app.post("/chat", (req, res) => {
//   const message = req.body.message;
//   const reply = getReply(message);

//   res.json({ reply });
// });

// // 🚀 START SERVER
// app.listen(5000, () => {
//   console.log("Gebeya AI backend running on port 5000 🚀");
// });


const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY",
});

app.post("/chat", async (req, res) => {
  const message = req.body.message;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful AI sales assistant for Ethiopian businesses. Reply in Amharic or English.",
      },
      { role: "user", content: message },
    ],
  });

  const reply = completion.choices[0].message.content;

  res.json({ reply });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});