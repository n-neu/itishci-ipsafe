import Draggable from "react-draggable";
import { useRef } from "react";
import "./chatbot.css";

export default function Chatbot() {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} offsetParent={document.body} bounds="parent" defaultPosition={{x: 0, y: window.innerHeight / 1.4}}>
      <div ref={nodeRef} className="chatbot">
        <img src="/chatbot.png" alt="chatbot.png" width="80px" height="80px" draggable="false" onSelect={() => {}}/>
      </div>
    </Draggable>
  );
}
