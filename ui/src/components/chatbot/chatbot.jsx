import Draggable from "react-draggable";
import { useRef, useEffect, useState } from "react";
import "./chatbot.css";

function MessageWrapper({ authorType, message }) {
  return (
    <div>
      {authorType}
      {message}
    </div>
  );
}

export function ChatbotUI({ isShown, setChatbotShown, btnRef }) {
  const containerRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target) && btnRef.current && !btnRef.current.contains(event.target)) {
        setChatbotShown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [btnRef, setChatbotShown]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error contacting support bot." }]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div ref={containerRef} className="chatbot-ui" style={{ display: isShown ? "flex" : "none" }}>
      <div className="chatbot-header">
        <img src="/chatbot.png" alt="chatbot" width="64px" height="64px" draggable={false} />
        <h1>HelpBot</h1>
      </div>

      <div className="chatbot-main">
        {messages.length === 0 ? (
          <div className="empty-inbox">
            <p>Start a conversation!</p>
          </div>
        ) : (
          <>
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div className="msg">
                  <div key={i} className={`${msg.role}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && <div className="msg assistant">Typing...</div>}
            </div>
          </>
        )}
      </div>

      <div className="chatbot-footer">
        <div className="message-container">
          <textarea placeholder="Send a Message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
        </div>

        <div className="send-button-wrapper" onClick={sendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#033155">
            <path d="M120-160v-640l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Chatbot({ onClick, isShown, toggleRef }) {
  const dragData = useRef({ x: 0, y: 0 });

  const handleStart = (e, data) => {
    dragData.current = { startX: data.x, startY: data.y };
  };

  const handleStop = (e, data) => {
    const movedX = Math.abs(data.x - dragData.current.startX);
    const movedY = Math.abs(data.y - dragData.current.startY);

    if (movedX < 5 && movedY < 5) {
      onClick();
    }
  };

  return (
    <Draggable onStart={handleStart} onStop={handleStop} cancel=".no-drag" enableUserSelectHack={true} nodeRef={toggleRef} offsetParent={document.body} bounds="parent" defaultPosition={{ x: 0, y: window.innerHeight / 1.4 }}>
      <button
        style={{ display: !isShown ? "block" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        ref={toggleRef}
        className="chatbot btn-top"
      >
        <img src="/chatbot.png" alt="chatbot" width="80px" height="80px" draggable={false} />
      </button>
    </Draggable>
  );
}
