import React from "react";

export default function Navbar({ page, onNavigate }) {
  return (
    <header className="site-nav">
      <button className="brand" onClick={() => onNavigate("home")} aria-label="FirstStep home">
        <span className="brand-mark">✨</span>
        <span>firststep<span className="brand-period">.</span></span>
      </button>
      <nav className="nav-links" aria-label="Main navigation">
        <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => onNavigate("home")}>Home</button>
        <button className={page === "builder" ? "nav-link active" : "nav-link"} onClick={() => onNavigate("builder")}>📄 Resume builder</button>
        <button className={page === "portfolio" ? "nav-link active" : "nav-link"} onClick={() => onNavigate("portfolio")}>Portfolio preview</button>
      </nav>
      <button className="nav-cta" onClick={() => onNavigate("builder")}>Start building ↗</button>
    </header>
  );
}