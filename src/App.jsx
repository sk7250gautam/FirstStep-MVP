import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Builder from "./pages/Builder.jsx";
import PortfolioPreview from "./pages/PortfolioPreview.jsx";
import { emptyResume, sampleResume } from "./utils/resumeData.js";
import { loadResume } from "./utils/storage.js";

export default function App() {
  const [page, setPage] = useState("home");
  const [resume, setResume] = useState(() => loadResume(emptyResume));
  const [template, setTemplate] = useState(() => {
    try { return localStorage.getItem("firststep.template.v1") || "classic"; } catch { return "classic"; }
  });
  useEffect(() => {
    try { localStorage.setItem("firststep.template.v1", template); } catch {}
  }, [template]);
  const navigate = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const loadExample = () => {
    setResume(sampleResume);
    navigate("builder");
  };
  return <>
    {page === "home" && <><Navbar page={page} onNavigate={navigate} /><Home onStart={() => navigate("builder")} resume={resume} /><div className="example-shortcut"><span>Not sure where to start?</span><button onClick={loadExample}>Load a sample resume</button><span className="example-note">This replaces the current draft.</span></div></>}
    {page === "builder" && <Builder resume={resume} setResume={setResume} template={template} setTemplate={setTemplate} onBack={() => navigate("home")} onPortfolio={() => navigate("portfolio")} />}
    {page === "portfolio" && <PortfolioPreview resume={resume} onBack={() => navigate("builder")} onHome={() => navigate("home")} />}
  </>;
}