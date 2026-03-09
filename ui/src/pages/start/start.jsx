import { Outlet, useNavigate } from "react-router-dom";

import Button from "../../components/button/button";
import "./start.css";

export function LoginMethodPrompt() {
  const navigate = useNavigate();
  return (
    <>
      <Button type="info" onClick={() => navigate("/login")} text="LOG IN" />
      <Button type="info" onClick={() => navigate("/signup")} text="SIGN UP" />
    </>
  );
}

export default function Start() {
  return (
    <div className="start">
      <div className="login-method">
        <Outlet />
      </div>
      <div className="others-container">
        <p>Other Actions</p>
        <Button type="info" text="E-Services" />
        <Button type="error" text="Report An IP Violation" />
      </div>
    </div>
  );
}
