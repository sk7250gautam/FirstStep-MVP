import { Plus, Trash2 } from "lucide-react";

function Field({ label, value, onChange, placeholder, type = "text", wide = false, rows }) {
  return <label className={`field ${wide ? "field-wide" : ""}`}>
    <span>{label}</span>
    {rows ? <textarea rows={rows} value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} /> :
      <input type={type} value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />}
  </label>;
}

function RepeatGroup({ title, items, fields, onChange, onAdd, onRemove, addLabel }) {
  return <section className="form-section">
    <div className="form-section-heading"><h3>{title}</h3><button type="button" className="small-add" onClick={onAdd}><Plus size={14} /> {addLabel}</button></div>
    {items.map((item, index) => <div className="repeat-card" key={item.id}>
      <div className="repeat-card-top"><span>{title.slice(0, -1)} {index + 1}</span>{items.length > 1 && <button className="icon-button danger" onClick={() => onRemove(item.id)} type="button" aria-label={`Remove ${title.slice(0, -1)}`}><Trash2 size={15} /></button>}</div>
      <div className="field-grid">
        {fields.map((field) => <Field key={field.key} {...field} value={item[field.key]} onChange={(value) => onChange(item.id, field.key, value)} />)}
      </div>
    </div>)}
  </section>;
}

export default function FormSection({ resume, setResume }) {
  const update = (key, value) => setResume((old) => ({ ...old, [key]: value }));
  const updateList = (list, id, key, value) => setResume((old) => ({ ...old, [list]: old[list].map((item) => item.id === id ? { ...item, [key]: value } : item) }));
  const add = (list, prefix, defaults) => setResume((old) => ({ ...old, [list]: [...old[list], { id: `${prefix}-${Date.now()}`, ...defaults }] }));
  const remove = (list, id) => setResume((old) => ({ ...old, [list]: old[list].filter((item) => item.id !== id) }));
  return <div className="resume-form">
    <section className="form-section">
      <div className="form-section-heading"><h3>Personal details</h3><span className="section-count">01</span></div>
      <div className="field-grid">
        <Field label="Full name" value={resume.fullName} onChange={(v) => update("fullName", v)} placeholder="e.g. Alex Morgan" />
        <Field label="Professional title" value={resume.role} onChange={(v) => update("role", v)} placeholder="e.g. Computer Science Student" />
        <Field label="Email" type="email" value={resume.email} onChange={(v) => update("email", v)} placeholder="you@example.com" />
        <Field label="Phone" value={resume.phone} onChange={(v) => update("phone", v)} placeholder="+1 555 000 0000" />
        <Field label="City / location" value={resume.location} onChange={(v) => update("location", v)} placeholder="City, Country" />
        <Field label="Website" value={resume.website} onChange={(v) => update("website", v)} placeholder="yourwebsite.com" />
        <Field label="LinkedIn" value={resume.linkedin} onChange={(v) => update("linkedin", v)} placeholder="linkedin.com/in/you" />
        <Field label="GitHub" value={resume.github} onChange={(v) => update("github", v)} placeholder="github.com/you" />
        <Field label="Professional summary" value={resume.summary} onChange={(v) => update("summary", v)} placeholder="A short introduction about your strengths and goals..." wide rows={4} />
      </div>
    </section>
    <RepeatGroup title="Education" items={resume.education} fields={[
      { key: "school", label: "School / institution", placeholder: "University or school" },
      { key: "degree", label: "Degree / qualification", placeholder: "Degree, course or class" },
      { key: "dates", label: "Dates", placeholder: "2023 — 2026" },
      { key: "detail", label: "Details", placeholder: "Relevant coursework, grades or activities", wide: true }
    ]} onChange={(id, key, value) => updateList("education", id, key, value)} onAdd={() => add("education", "edu", { school: "", degree: "", dates: "", detail: "" })} onRemove={(id) => remove("education", id)} addLabel="Add education" />
    <RepeatGroup title="Experience" items={resume.experience} fields={[
      { key: "title", label: "Role / position", placeholder: "Intern, volunteer, club lead" },
      { key: "company", label: "Organization", placeholder: "Company or organization" },
      { key: "dates", label: "Dates", placeholder: "Jun 2025 — Aug 2025" },
      { key: "detail", label: "Impact / responsibilities", placeholder: "What did you do? Include outcomes where possible.", wide: true, rows: 3 }
    ]} onChange={(id, key, value) => updateList("experience", id, key, value)} onAdd={() => add("experience", "exp", { title: "", company: "", dates: "", detail: "" })} onRemove={(id) => remove("experience", id)} addLabel="Add experience" />
    <RepeatGroup title="Projects" items={resume.projects} fields={[
      { key: "name", label: "Project name", placeholder: "Project or case study" },
      { key: "link", label: "Project link", placeholder: "project.example.com" },
      { key: "detail", label: "What you made", placeholder: "Describe the problem, your contribution and result.", wide: true, rows: 3 }
    ]} onChange={(id, key, value) => updateList("projects", id, key, value)} onAdd={() => add("projects", "proj", { name: "", link: "", detail: "" })} onRemove={(id) => remove("projects", id)} addLabel="Add project" />
    <section className="form-section">
      <div className="form-section-heading"><h3>Skills & achievements</h3><span className="section-count">05</span></div>
      <div className="field-grid">
        <Field label="Skills (comma-separated)" value={resume.skills} onChange={(v) => update("skills", v)} placeholder="Excel, React, Research..." wide rows={2} />
        <Field label="Achievements / certifications" value={resume.achievements} onChange={(v) => update("achievements", v)} placeholder="Awards, certificates, recognition..." wide rows={3} />
      </div>
    </section>
  </div>;
}