import { useState } from "react";
import "./chatBox.css";

export default function ChatBox({ type, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput("");
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <span>{type === "soporte" ? "Soporte IA" : "Asesor Financiero"}</span>
        <button class="chatbox-x-btn" onClick={onClose}>×</button>
      </div>
      <div className="chatbox-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.fromUser ? "msg user" : "msg"}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}
