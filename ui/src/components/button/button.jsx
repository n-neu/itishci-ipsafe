import "./button.css";

const colors = { info: "#033155", error: "#B8533C", warning: "#F1D88C" };

export default function Button({ type, text, onClick, isUnderlined = true, dropdownInfo = "" }) {
  const col = colors[type];

  return (
    <button className="btn" onClick={onClick} style={{ backgroundColor: col, textDecoration: isUnderlined ? "underline" : "none" }}>
      {text}
      {dropdownInfo && (
        <>
          <div className="toggle">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        </>
      )}
    </button>
  );
}
