import { useState, useRef } from "react";
import ReactDOMClient from "react-dom/client";
import { HashRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

import { AuthProvider } from "./contexts/auth/auth";
import ProtectedRoute from "./contexts/ProtectedRoute/ProtectedRoute";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Chatbot, {ChatbotUI} from "./components/chatbot/chatbot";

import Start, { LoginMethodPrompt } from "./pages/start/start";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

import Trademark from "./pages/services/trademark";

import "./index.css";

function Layout() {
  const [chatbotShown, setChatbotShown] = useState(false)
  const toggleRef = useRef(null);

  return (
    <>
      <Chatbot toggleRef={toggleRef} isShown={chatbotShown} onClick={() => setChatbotShown(prev => !prev)}/>
      <Header />
      <div className="main">
      <ChatbotUI btnRef={toggleRef} isShown={chatbotShown} setChatbotShown={setChatbotShown}/>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/"/>} />
            <Route path="/home/2" element={<Navigate to="/test"/>} />
            <Route element={<Start />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="services">
            <Route path="trademark" element={<Trademark />} />
            </Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

const container = document.getElementById("root");
if (!window.__root) {
  window.__root = ReactDOMClient.createRoot(container);
}

window.__root.render(<App />);
