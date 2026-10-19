import React from "react";

export default function ResumePreview({ resume = {}, template = "classic" }) {
  const skills = (resume.skills || "")
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const filled = (val) => Boolean(val && val.trim());

  return (
    <article className={`resume-paper resume-${template}`} style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Header Section */}
      <header className="resume-head" style={{ marginBottom: "20px", borderBottom: "2px solid #333", paddingBottom: "10px" }}>
        <h1 style={{ margin: "0 0 5px 0", fontSize: "28px" }}>
          {resume.fullName || "Your Name"}
        </h1>
        <p style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#555", fontWeight: "bold" }}>
          {resume.role || "Your Professional Title"}
        </p>
        
        {/* Contact Info */}
        <div className="resume-contact" style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "14px", color: "#444" }}>
          {filled(resume.email) && <span>✉ {resume.email}</span>}
          {filled(resume.phone) && <span>📞 {resume.phone}</span>}
          {filled(resume.location) && <span>📍 {resume.location}</span>}
          {filled(resume.website) && <span>🌐 {resume.website}</span>}
          {filled(resume.linkedin) && <span>🔗 {resume.linkedin}</span>}
          {filled(resume.github) && <span>💻 {resume.github}</span>}
        </div>
      </header>

      {/* Summary Section */}
      {filled(resume.summary) && (
        <section className="resume-section" style={{ marginBottom: "15px" }}>
          <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "3px" }}>
            Profile Summary
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{resume.summary}</p>
        </section>
      )}

      {/* Experience Section */}
      {Array.isArray(resume.experience) && resume.experience.length > 0 && (
        <section className="resume-section" style={{ marginBottom: "15px" }}>
          <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "3px" }}>
            Experience
          </h2>
          {resume.experience.map((exp, index) => (
            <div key={exp.id || index} className="resume-entry" style={{ marginBottom: "10px" }}>
              <strong style={{ fontSize: "15px" }}>{exp.title}</strong>
              {exp.company && <span style={{ color: "#666", marginLeft: "5px" }}>| {exp.company}</span>}
              {exp.detail && <p style={{ margin: "4px 0 0 0", fontSize: "14px" }}>{exp.detail}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education Section */}
      {Array.isArray(resume.education) && resume.education.length > 0 && (
        <section className="resume-section" style={{ marginBottom: "15px" }}>
          <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "3px" }}>
            Education
          </h2>
          {resume.education.map((edu, index) => (
            <div key={edu.id || index} className="resume-entry" style={{ marginBottom: "10px" }}>
              <strong style={{ fontSize: "15px" }}>{edu.degree}</strong>
              {edu.school && <span style={{ color: "#666", marginLeft: "5px" }}>| {edu.school}</span>}
              {edu.detail && <p style={{ margin: "4px 0 0 0", fontSize: "14px" }}>{edu.detail}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Projects Section */}
      {Array.isArray(resume.projects) && resume.projects.length > 0 && (
        <section className="resume-section" style={{ marginBottom: "15px" }}>
          <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "3px" }}>
            Projects
          </h2>
          {resume.projects.map((proj, index) => (
            <div key={proj.id || index} className="resume-entry" style={{ marginBottom: "10px" }}>
              <strong style={{ fontSize: "15px" }}>{proj.name}</strong>
              {proj.link && (
                <span style={{ fontSize: "13px", color: "#0066cc", marginLeft: "8px" }}>
                  ({proj.link})
                </span>
              )}
              {proj.detail && <p style={{ margin: "4px 0 0 0", fontSize: "14px" }}>{proj.detail}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="resume-section" style={{ marginBottom: "15px" }}>
          <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "3px" }}>
            Skills
          </h2>
          <div className="resume-skills" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  background: "#eee",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  fontSize: "13px"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Achievements Section */}
      {filled(resume.achievements) && (
        <section className="resume-section" style={{ marginBottom: "15px" }}>
          <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "3px" }}>
            Achievements
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{resume.achievements}</p>
        </section>
      )}
    </article>
  );
}