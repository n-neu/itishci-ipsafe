import { useState } from "react";
import "../template.css";
import "./trademark.css";

export default function Trademark() {
  const [activeTab, setActiveTab] = useState("In Person");

  return (
    <div className="trademark-container">
      <h2 className="page-title">Trademark</h2>

      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "In Person" ? "yellow-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("In Person")}
        >
          In Person
        </button>
        <button
          className={`tab-btn ${activeTab === "Online" ? "blue-tab" : "inactive-tab"}`}
          onClick={() => setActiveTab("Online")}
        >
          Online
        </button>
      </div>

      <div className="content-card">
        <h3>Fill up Info</h3>
        {/*OCR logic will go inside here */}
      </div>

      <button className="fab-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="#FFFFFF">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
      </button>

      {/*take photo/upload photo logic TBA*/}
    </div>
  );

}

