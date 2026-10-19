import React from "react";

export default function PortfolioPreview({ portfolio = {}, template = "modern" }) {
  const filled = (val) => Boolean(val && val.trim());

  return (
    <div className={`portfolio-preview portfolio-${template}`} style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Header Section */}
      <header style={{ marginBottom: "25px", borderBottom: "2px solid #eaeaea", paddingBottom: "15px" }}>
        <h1 style={{ margin: "0 0 5px 0", fontSize: "32px", color: "#111" }}>
          {portfolio.fullName || "Your Name"}
        </h1>
        <p style={{ margin: "0 0 12px 0", fontSize: "18px", color: "#666", fontWeight: "600" }}>
          {portfolio.title || "Full Stack Developer"}
        </p>

        {/* Contact Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", fontSize: "14px", color: "#444" }}>
          {filled(portfolio.email) && <span>✉ {portfolio.email}</span>}
          {filled(portfolio.phone) && <span>📞 {portfolio.phone}</span>}
          {filled(portfolio.location) && <span>📍 {portfolio.location}</span>}
          {filled(portfolio.website) && <span>🌐 {portfolio.website}</span>}
          {filled(portfolio.linkedin) && <span>🔗 {portfolio.linkedin}</span>}
          {filled(portfolio.github) && <span>💻 {portfolio.github}</span>}
        </div>
      </header>

      {/* About Section */}
      {filled(portfolio.about) && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "20px", color: "#222", borderBottom: "1px solid #ddd", paddingBottom: "4px" }}>
            About Me
          </h2>
          <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#333" }}>{portfolio.about}</p>
        </section>
      )}

      {/* Projects Section */}
      {Array.isArray(portfolio.projects) && portfolio.projects.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "20px", color: "#222", borderBottom: "1px solid #ddd", paddingBottom: "4px" }}>
            Featured Projects
          </h2>
          <div style={{ display: "grid", gap: "12px", marginTop: "10px" }}>
            {portfolio.projects.map((proj, index) => (
              <div
                key={proj.id || index}
                style={{
                  padding: "12px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "6px",
                  backgroundColor: "#fafafa"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: "16px", color: "#111" }}>{proj.name}</strong>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: "13px", color: "#0066cc", textDecoration: "none" }}
                    >
                      View Project ↗
                    </a>
                  )}
                </div>
                {proj.detail && <p style={{ margin: "6px 0 0 0", fontSize: "14px", color: "#555" }}>{proj.detail}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {filled(portfolio.skills) && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "20px", color: "#222", borderBottom: "1px solid #ddd", paddingBottom: "4px" }}>
            Tech Stack & Skills
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
            {portfolio.skills
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean)
              .map((skill, index) => (
                <span
                  key={index}
                  style={{
                    background: "#eef2ff",
                    color: "#3730a3",
                    padding: "4px 10px",
                    borderRadius: "15px",
                    fontSize: "13px",
                    fontWeight: "500"
                  }}
                >
                  {skill}
                </span>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}