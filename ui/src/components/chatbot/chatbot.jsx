import Draggable from "react-draggable";
import { useRef, useEffect } from "react";
import "./chatbot.css";

export function ChatbotUI({isShown, setChatbotShown, btnRef}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current &&
        !containerRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)) {
        console.log("setting false")
        setChatbotShown(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
    <div ref={containerRef} className="chatbot-ui" style={{display: (isShown ? "flex" : "none")}}>
      <div className="chatbot-header">
<img src="/chatbot.png" alt="chatbot.png" width="64px" height="64px" draggable={false}/>
  <h1>HelpBot</h1>
      </div>
      <div className="chatbot-main">
        <div className="empty-inbox">
        <svg xmlns="http://www.w3.org/2000/svg" height="256px" viewBox="0 -960 960 960" width="256px" fill="#FFE08E"><path d="M880-81 721-240H300q-24.75 0-42.37-17.63Q240-275.25 240-300v-80h440q24.75 0 42.38-17.63Q740-415.25 740-440v-280h80q24.75 0 42.38 17.62Q880-684.75 880-660v579ZM140-425l75-75h405v-320H140v395ZM80-280v-540q0-24.75 17.63-42.38Q115.25-880 140-880h480q24.75 0 42.38 17.62Q680-844.75 680-820v320q0 24.75-17.62 42.37Q644.75-440 620-440H240L80-280Zm60-220v-320 320Z"/></svg>
        <p>Start a conversation! </p>
        </div>
      </div>
      <div className="chatbot-footer">
        <div className="message-container">
          <textarea name="" id="" placeholder="Send a Message..."></textarea>
        </div>
        <div className="send-button-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#033155"><path d="M120-160v-640l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0v-457 457Z"/></svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default function Chatbot({onClick, isShown, toggleRef}) {
  const dragData = useRef({ x: 0, y: 0 });

  const handleStart = (e, data) => {
    // Record starting position
    dragData.current = { startX: data.x, startY: data.y };
  };

  const handleStop = (e, data) => {
    const movedX = Math.abs(data.x - dragData.current.startX);
    const movedY = Math.abs(data.y - dragData.current.startY);

    // Treat as click if movement is very small
    if (movedX < 5 && movedY < 5) {
      onClick();
    }
  };

  return (
    <Draggable onStart={handleStart} onStop={handleStop} cancel=".no-drag" enableUserSelectHack={true} nodeRef={toggleRef} offsetParent={document.body} bounds="parent" defaultPosition={{x: 0, y: window.innerHeight / 1.4}}>
      <button style={{display: (!isShown ? "block" : "none")}} onClick={(e) => {
        e.stopPropagation();
        onClick();
        }} ref={toggleRef} className="chatbot btn-top">
<img src="/chatbot.png" alt="chatbot.png" width="80px" height="80px" draggable={false}/>
      </button>
    </Draggable>
  );
}
