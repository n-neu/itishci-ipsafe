import { useState } from "react";
import "../template.css";
import "./trademark.css";

export default function Trademark() {
  // This state will track which tab is currently selected
  const [activeTab, setActiveTab] = useState("In Person");

  return (
    <div className="trademark-container">
      <h2 className="page-title">Trademark</h2>

      {/* The Tab Navigation */}
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

      {/* The White Content Card */}
      <div className="content-card">
        <h3>Fill up Info</h3>
        {/* Your form fields and future OCR logic will go inside here */}
      </div>

      {/* The Floating Action Button (Yellow +) */}
      <button className="fab-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="#FFFFFF">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
      </button>

      {/* Note: We will add the "Take Photo / File Upload" pop-up logic later! */}
    </div>
  );
}