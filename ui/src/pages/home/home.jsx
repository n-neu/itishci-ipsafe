import {useState} from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button";

import "./home.css";

export default function Home() {
  const Navigate = useNavigate();
  const [dropdownPage, setDropdownPage] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState("");
  const handleToggle = (name) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  return (
    <>
      <div className="home-container">
        <div className="search-bar-container">
          <div className="img-overlay">
            <img src="/searchbar-bg.jpg" alt="" />
          </div>
          <div className="search-bar">
            <div className="text-field">
              <input type="text" name="" id="" placeholder="Search Services" />
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#033155">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="quickstart">
          {
            dropdownPage == 1 ? <h1>Quick Start</h1> :
            dropdownPage == 2 ? <h1 style={{color: "#ffc61a"}}>Other Services</h1> : ""
          }
          <div className="btn-wrapper">
          {
            dropdownPage == 1 ? 
            <>
            <Button toggle={activeDropdown === "Trademark"} onClick={() => {Navigate("services/trademark")}} svgOnClick={() => handleToggle("Trademark")} type="info" text="Trademark" isUnderlined={false} isDropdown={true}  >
              <p>Do you have an innovation that’s new, inventive, and can be used in industry? You can protect it through a patent. Learn more about patents and how to apply for the grant of a patent.
</p>
            </Button>
            <Button toggle={activeDropdown === "Copyright"} onClick={() => {Navigate("services/copyright")}} svgOnClick={() => handleToggle("Copyright")}  type="info" text="Copyright" isUnderlined={false} isDropdown={true} >
              <p>copyright info</p>
            </Button>
            <Button toggle={activeDropdown === "Patent"} onClick={() => {Navigate("services/patent")}} svgOnClick={() => handleToggle("Patent")}  type="info" text="Patent" isUnderlined={false} isDropdown={true} >
            <p>patent info</p>
            </Button>
            <Button  type="warning" text="Other Services" onClick={() => setDropdownPage(2)} />
            </> :
            dropdownPage == 2 ? <>
            <Button toggle={activeDropdown === "IndustrialDesign"} onClick={() => {Navigate("services/industrialdesign")}} svgOnClick={() => handleToggle("IndustrialDesign")} type="info" text="Industrial Design" isUnderlined={false} isDropdown={true}  >
              <p>Industrial Design info</p>
            </Button>
            <Button toggle={activeDropdown === "UtilityModel"} onClick={() => {Navigate("services/utilitymodel")}} svgOnClick={() => handleToggle("UtilityModel")} type="info" text="Utility Model" isUnderlined={false} isDropdown={true} >
              <p>Utility Model info</p>
            </Button>
            <Button  type="null" text="Back" onClick={() => setDropdownPage(1)} />
            </> : ""
          }
            <h4>Other Actions</h4>
            <Button type="info" text="E-Services" />
            <Button onClick={() => Navigate("home/2")} type="error" text="Report an IP Violation" />
          </div>
        </div>
      </div>
    </>
  );
}
