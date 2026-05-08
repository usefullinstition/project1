// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // HOME ROUTE (Fix Cannot GET /)
// // app.get("/", (req, res) => {
// //   res.send("🚀 Gebeya AI Backend is Live!");
// // });

// // // CHAT API
// // app.post("/chat", (req, res) => {
// //   const message = req.body.message?.toLowerCase() || "";
// app.get("/", (req, res) => {
//   res.send("🚀 Backend is running on Render");
// });
// app.post("/chat", (req, res) => {
//   res.json({ reply: "Hello from server 🚀" });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log("Server running on port " + PORT);
// });

//   let reply = "እባክሽ ዝርዝር ጠይቂ 😊";

//   if (message.includes("ሰላም") || message.includes("hello")) {
//     reply = "ሰላም 👋 እንኳን ደህና መጣሽ!";
//   } else if (message.includes("ዋጋ")) {
//     reply = "ዋጋው 500 ብር ነው 💰";
//   } else if (message.includes("delivery")) {
//     reply = "Delivery በ1-2 ቀን ውስጥ ይደርሳል 🚚";
//   } else if (message.includes("payment")) {
//     reply = "በTelebirr ወይም CBE መክፈል ትችላለሽ 💳";
//   }

//   res.json({ reply });
// });

// // IMPORTANT: Render uses PORT
// const PORT = process.env.PORT || 10000;

// app.listen(PORT, () => {
//   console.log("Server running on port " + PORT);
// });


const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());




// chat API
app.post("/chat", (req, res) => {
  const message = req.body.message?.toLowerCase() || "";

  let reply = "እባክሽ ዝርዝር ጠይቂ 😊";

  if (message.includes("ሰላም")) {
    reply = "ሰላም 👋 እንኳን ደህና መጣሽ!";
  } else if (message.includes("ዋጋ")) {
    reply = "ዋጋው 500 ብር ነው 💰";
  } else if (message.includes("delivery")) {
    reply = "Delivery 1-2 ቀን 🚚";
  }

  res.json({ reply });
});
// test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("🚀 🚀 Gebeya AI Server is Live");
});
// IMPORTANT: use Render PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});