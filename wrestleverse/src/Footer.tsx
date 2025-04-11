import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "ai", text: "Hi! Ask me anything about Wrestleverse!" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setChatOpen(!chatOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    const aiReply = { sender: "ai", text: "Thanks for your question! Here's some info about Wrestleverse..." };
    setMessages([...messages, userMessage, aiReply]);
    setInput("");
  };

  return (
    <>
      <div className="chat-toggle" onClick={toggleChat}>
        💬
      </div>

      {chatOpen && (
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      <div className="FooterBackground">
        <div className="FooterText">
          © {new Date().getFullYear()} Wrestleverse. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
