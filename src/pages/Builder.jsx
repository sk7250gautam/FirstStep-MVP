import { useEffect, useState } from "react";
import { ArrowLeft, Check, Download, Eye, RotateCcw, ShieldCheck } from "lucide-react";
import FormSection from "../components/FormSection.jsx";
import ResumePreview from "../components/ResumePreview.jsx";
import TemplateSelector from "../components/TemplateSelector.jsx";
import { clearResume, saveResume } from "../utils/storage.js";

export default function Builder({ resume, setResume, template, setTemplate, onBack, onPortfolio }) {
  const [saved, setSaved] = useState(true);
  useEffect(() => {
    setSaved(saveResume(resume));
  }, [resume]);
  const exportPdf = () => window.print();
  const reset = () => {
    if (window.confirm("Clear all resume information saved in this browser? This cannot be undone.")) {
      clearResume();
      window.location.reload();
    }
  };
  return <main className="builder-page">
    <div className="builder-topbar"><button className="back-link" onClick={onBack}><ArrowLeft size={16} /> Back home</button><div className="autosave"><span className={saved ? "status-dot" : "status-dot warning"} />{saved ? "Draft saved in this browser" : "Could not save draft"}</div><button className="button-primary compact-button" onClick={exportPdf}><Download size={16} /> Save as PDF</button></div>
    <div className="builder-heading"><div><div className="eyebrow">YOUR RESUME WORKSPACE</div><h1>Build your next step<span>.</span></h1><p>Fill in what you have. Your preview updates as you type.</p></div><button className="text-button" onClick={reset}><RotateCcw size={14} /> Clear draft</button></div>
    <div className="builder-layout">
      <section className="editor-column">
        <div className="panel-heading"><div><span className="panel-step">01</span><div><h2>Your information</h2><p>Start simple. You can add more anytime.</p></div></div></div>
        <FormSection resume={resume} setResume={setResume} />
        <div className="privacy-note"><ShieldCheck size={18} /><p><strong>Your information stays on this device.</strong><br />FirstStep stores your draft in this browser’s local storage. It is not sent to a FirstStep server. Avoid using a shared computer for private information.</p></div>
      </section>
      <aside className="preview-column">
        <div className="preview-toolbar"><div><Eye size={17} /><span>Live preview</span></div><span className="live-pill"><i /> LIVE</span></div>
        <TemplateSelector value={template} onChange={setTemplate} />
        <div className="preview-canvas"><ResumePreview resume={resume} template={template} /></div>
        <div className="preview-help"><Check size={15} /> This is how your PDF will look. Use “Save as PDF” to export.</div>
        <button className="button-secondary full-button" onClick={onPortfolio}>Preview my portfolio <ArrowLeft size={16} className="arrow-turn" /></button>
      </aside>
    </div>
    <footer className="builder-footer">FirstStep · Build with confidence, one section at a time.</footer>
  </main>;
}