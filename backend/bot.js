const TelegramBot = require("node-telegram-bot-api");


const token = "8753129808:AAFO5ViJqlAPHR50iyapxDjUh3H_fFcytGk";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  let reply = "አልገባኝም 😅";

  if (text.includes("ዋጋ")) {
    reply = "ዋጋው 500 ብር ነው 💰";
  }

  if (text.includes("ሰላም")) {
    reply = "ሰላም 👋 እንኳን ደህና መጣሽ";
  }

  bot.sendMessage(chatId, reply);
});