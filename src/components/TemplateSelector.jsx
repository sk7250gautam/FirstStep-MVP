import { Check } from "lucide-react";

const templates = [
  { id: "classic", name: "Classic", description: "Timeless and professional", visual: "classic" },
  { id: "modern", name: "Modern", description: "Bold, clean and confident", visual: "modern" },
  { id: "compact", name: "Compact", description: "Simple, space-efficient", visual: "compact" }
];

export default function TemplateSelector({ value, onChange }) {
  return (
    <div className="template-grid">
      {templates.map((template) => (
        <button key={template.id} className={`template-option ${value === template.id ? "selected" : ""}`} onClick={() => onChange(template.id)} aria-pressed={value === template.id}>
          <span className={`template-art ${template.visual}`}>
            <i /><i /><i /><i /><i /><i />
            {value === template.id && <span className="template-check"><Check size={13} /></span>}
          </span>
          <span className="template-name">{template.name}</span>
          <span className="template-description">{template.description}</span>
        </button>
      ))}
    </div>
  );
}