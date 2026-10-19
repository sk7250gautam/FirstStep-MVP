import { ArrowRight, Check, FileText, LockKeyhole, Palette, Printer, Sparkles, WandSparkles } from "lucide-react";
import { motion } from "motion/react";

const features = [
  { icon: FileText, title: "Made for your first step", text: "Show your skills, class projects, volunteering and potential—even without years of experience." },
  { icon: Palette, title: "Three thoughtful templates", text: "Choose a classic, modern or compact layout that keeps the focus on your story." },
  { icon: LockKeyhole, title: "Your draft stays with you", text: "Your information is saved in this browser. No account or cloud upload required." },
  { icon: Printer, title: "PDF-ready in a click", text: "Use your browser’s print dialog to save a polished resume as a PDF." }
];

export default function Home({ onStart, resume }) {
  return <main className="home-page">
    <section className="hero section-wrap">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
        <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
        <h1>Small beginnings.<br /><em>Big possibilities.</em></h1>
        <p className="hero-text">Build a resume that feels like you. Turn your skills, projects and ambition into a first impression worth remembering.</p>
        <div className="hero-actions">
          <button className="button-primary" onClick={onStart}>Build my resume <ArrowRight size={17} /></button>
          <span className="no-card"><Check size={15} /> Free to use. No sign-up.</span>
        </div>
        <div className="hero-proof"><div className="proof-avatars"><span>A</span><span>M</span><span>J</span></div><p><strong>A better first step</strong><br />for students and new grads</p></div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .55, delay: .1 }}>
        <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        <div className="floating-note"><Sparkles size={15} /><span>Make your experience count</span></div>
        <div className="mini-resume">
          <div className="mini-resume-top"><div><div className="mini-name">Alex Morgan</div><div className="mini-role">Aspiring Product Designer</div></div><div className="mini-avatar">A</div></div>
          <div className="mini-contact">AUSTIN, TX &nbsp;·&nbsp; ALEX@EMAIL.COM</div>
          <div className="mini-rule" />
          <div className="mini-label">PROFILE</div><div className="mini-lines"><i /><i /><i className="short" /></div>
          <div className="mini-label">SELECTED PROJECTS</div><div className="mini-project"><span /><div><b>StudySpace</b><i /><i className="short" /></div></div>
          <div className="mini-project"><span /><div><b>Local Loop</b><i /><i className="short" /></div></div>
          <div className="mini-label">SKILLS</div><div className="mini-tags"><i>Figma</i><i>Research</i><i>Prototyping</i></div>
        </div>
        <div className="visual-badge"><WandSparkles size={17} /><div><strong>Looks like you.</strong><span>Not a template robot.</span></div></div>
      </motion.div>
    </section>
    <section className="trust-strip"><div><span>01</span> START WITH WHAT YOU HAVE</div><div><span>02</span> MAKE IT YOUR OWN</div><div><span>03</span> TAKE THE NEXT STEP</div></section>
    <section className="features-section section-wrap">
      <div className="section-intro"><div className="eyebrow">THE FIRSTSTEP DIFFERENCE</div><h2>Your story is already<br />worth sharing<span>.</span></h2><p>You don’t need a long job history to make a strong start. You need a clear way to show what you can do.</p></div>
      <div className="feature-grid">{features.map(({ icon: Icon, title, text }, index) => <motion.article className="feature-card" key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><div className="feature-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
    </section>
    <section className="bottom-cta"><div><span className="eyebrow">YOUR FUTURE ISN’T ON HOLD</span><h2>Let’s make your next step<br />a little less intimidating.</h2></div><button className="button-light" onClick={onStart}>Start for free <ArrowRight size={17} /></button></section>
    <footer className="site-footer"><span className="footer-brand">firststep<span>.</span></span><p>Built for beginnings. Your information stays in your browser.</p><span>© {new Date().getFullYear()} FirstStep</span></footer>
  </main>;
}