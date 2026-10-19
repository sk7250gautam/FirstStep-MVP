# FirstStep — Resume & Portfolio Builder

A free, client-side resume builder MVP for students, new graduates, and early-career applicants.

## Features

- Responsive home page and resume workspace
- Editable personal details, education, experience, projects, skills, and achievements
- Live resume preview
- Three resume templates: Classic, Modern, Compact
- Browser localStorage draft saving
- Browser print dialog for **Save as PDF**
- Private portfolio preview generated from resume data
- Sample resume starter
- No account, backend, paid API, or cloud database required

## Requirements

- Node.js (current LTS recommended)
- npm
- A modern browser

## Run locally

Open PowerShell in the `D:\FirstStep` folder:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (usually `https://first-step-mvp.vercel.app/`).

## Production build

```powershell
npm run build
npm run preview
```

Vite writes production files to `dist/`.

## Deploy to Vercel

1. Create a GitHub repository named `firststep-resume-builder`.
2. From the project folder, run:

   ```powershell
   git init
   git add .
   git commit -m "Build FirstStep resume builder MVP"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/firststep-resume-builder.git
   git push -u origin main
   ```

3. Sign in to Vercel and import that GitHub repository.
4. Use build command `npm run build` and output directory `dist`.
5. Deploy. Future pushes to the connected branch can trigger deployments.

Do not copy these Git commands into an existing repository unless you understand its current Git setup. Replace `YOUR-USERNAME` with your GitHub username.

## Privacy notes

Resume data is stored in the browser's `localStorage`; it is not sent to a FirstStep server by this MVP. Anyone with access to the same browser profile may be able to see the saved draft. Do not use a shared/public computer for sensitive information. Clearing browser site data may delete the draft. The **Clear draft** action removes the saved resume and reloads the app.

The portfolio screen is a local preview only. It does not publish a public URL.

## PDF export

Choose **Save as PDF** in the builder. In the browser print dialog, select **Save as PDF** as the destination. If a browser adds headers/footers, disable them in print options.

## Project structure

```text
FirstStep/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── FormSection.jsx
    │   ├── Navbar.jsx
    │   ├── ResumePreview.jsx
    │   └── TemplateSelector.jsx
    ├── pages/
    │   ├── Builder.jsx
    │   ├── Home.jsx
    │   └── PortfolioPreview.jsx
    └── utils/
        ├── resumeData.js
        └── storage.js
```

## MVP limitations / next steps

- No public portfolio hosting or shareable portfolio links yet.
- No login or cloud sync.
- No AI writing API.
- Consider adding stronger field validation, accessibility testing, automated tests, and a privacy policy before a broader launch.
