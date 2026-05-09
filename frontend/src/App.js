import { useState } from "react";
import axios from "axios";
import './App.css';
function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const userMsg = { sender: "user", text: message };
    setChat((prev) => [...prev, userMsg]);

    const res = await axios.post("http://localhost:5000/chat", {
      message,
    });
    axios.post("http://localhost:5000/chat", {
  message: message
});

    const botMsg = { sender: "bot", text: res.data.reply };
    setChat((prev) => [...prev, botMsg]);

    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2>🤖 Gebeya AI</h2>

      <div style={styles.chatBox}>
        {chat.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
            }}
          >
            <span
              style={{
                ...styles.bubble,
                background:
                  msg.sender === "user" ? "#0084ff" : "#e5e5ea",
                color: msg.sender === "user" ? "white" : "black",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />
        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "auto",
    fontFamily: "Arial",
  },
  chatBox: {
    height: 400,
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: 10,
    borderRadius: 10,
    background: "#f5f5f5",
  },
  bubble: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 15,
    margin: "5px 0",
  },
  inputBox: {
    display: "flex",
    marginTop: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    padding: 10,
    background: "#0084ff",
    color: "white",
    border: "none",
  },
};

export default App;