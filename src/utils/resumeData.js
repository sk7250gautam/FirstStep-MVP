export const emptyResume = {
  fullName: "",
  role: "",
  email: "",
  phone: "",
  location: "",
  website: "",
  linkedin: "",
  github: "",
  summary: "",
  education: [{ id: "edu-1", school: "", degree: "", dates: "", detail: "" }],
  experience: [{ id: "exp-1", company: "", title: "", dates: "", detail: "" }],
  projects: [{ id: "proj-1", name: "", link: "", detail: "" }],
  skills: "Communication, Problem solving, Teamwork",
  achievements: ""
};

export const sampleResume = {
  fullName: "Alex Morgan",
  role: "Aspiring Product Designer",
  email: "alex.morgan@email.com",
  phone: "+1 555 010 2040",
  location: "Austin, TX",
  website: "alexmorgan.design",
  linkedin: "linkedin.com/in/alexmorgan",
  github: "github.com/alexmorgan",
  summary: "Curious and detail-oriented designer who enjoys turning complex problems into clear, useful digital experiences. Looking for an opportunity to learn, collaborate, and make a meaningful impact.",
  education: [{ id: "edu-1", school: "University of Texas", degree: "B.A. in Communication Design", dates: "2022 — 2026", detail: "Relevant coursework: UX research, visual systems, interaction design" }],
  experience: [{ id: "exp-1", company: "Campus Creative Lab", title: "Design Volunteer", dates: "Jan 2025 — May 2025", detail: "Created social graphics for 6 campus events and collaborated with a team of 4 to improve event sign-up materials." }],
  projects: [
    { id: "proj-1", name: "StudySpace", link: "studyspace.example.com", detail: "Designed a student study-planner concept, from interview notes to clickable prototype. Tested the flow with 5 classmates." },
    { id: "proj-2", name: "Local Loop", link: "", detail: "Built a visual identity and landing-page concept for a community exchange initiative." }
  ],
  skills: "Figma, Wireframing, Prototyping, User Research, HTML/CSS, Communication",
  achievements: "Finalist, Campus Design Sprint (2025)"
};