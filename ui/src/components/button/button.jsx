import {useState} from "react";

import "./button.css";

const colors = { info: "#033155", error: "#B8533C", warning: "#F1D88C", null: "#353535" };



export default function Button({
  toggle = false,
  type,
  text,
  onClick,
  isUnderlined = true,
  isDropdown = false,
  svgOnClick,
  children,
}) {
  const col = colors[type];

  return (
    <div
      className="btn-wrapper"
      style={{ display: "inline-block", position: "relative" }}
    >
      <button
        className="btn"
        onClick={onClick}
        style={{
          backgroundColor: col,
          textDecoration: isUnderlined ? "underline" : "none",
        }}
      >
        {text}
         {toggle && children} {/* FIX UNDER THE BUTTON */}
      </button>

      {isDropdown && (
        <div
          className="toggle"
          onClick={(e) => {
            e.stopPropagation(); // prevents outer button click
            svgOnClick?.();
          }}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}
