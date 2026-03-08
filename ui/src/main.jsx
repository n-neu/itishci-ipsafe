import ReactDOMClient from "react-dom/client";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Start, { LoginMethodPrompt } from "./pages/start/start";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";

import "./index.css";

function Layout() {
  return (
    <>
      <Header />
      <Start />
      <Footer />
    </>
  );
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginMethodPrompt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const container = document.getElementById("root");
if (!window.__root) {
  window.__root = ReactDOMClient.createRoot(container);
}

window.__root.render(<App />);
