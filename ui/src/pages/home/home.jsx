import Button from "../../components/button/button";

import "./home.css";

export default function Home() {
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
          <h1>Quick Start</h1>
          <div className="btn-wrapper">
            <Button type="info" text="Trademark" isUnderlined={false} dropdownInfo="tesLorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque semt" />
            <Button type="info" text="Copyright" isUnderlined={false} dropdownInfo="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem" />
            <Button type="info" text="Patent" isUnderlined={false} dropdownInfo="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem" />
            <Button type="warning" text="Other Services" />
            <h4>Other Actions</h4>
            <Button type="info" text="E-Services" />
            <Button type="error" text="Report an IP Violation" />
          </div>
        </div>
      </div>
    </>
  );
}
