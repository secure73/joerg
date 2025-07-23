# Project Roadmap: joerg

## 1. Project Target
- Build a modern, visually stunning, bilingual (German & English) personal website for Jörg Feller.
- Design inspired by Japanese art, especially sakura blossoms, with a full-screen artistic background.
- Content includes: landing page, About Me, Contact (with form), and language switcher.
- Professional presentation of Jörg's background as a Lernberater, Dozent, and IT expert.
- Use STCMS (hybrid PHP/React CMS) and follow all best practices from AI_ONBOARDING.md.
- Use Git for version control from the very beginning.

## 2. Previous Mistakes & Lessons Learned
- Did not read or follow AI_ONBOARDING.md carefully enough.
- Missed proactively recommending Git and version control best practices.
- Did not always confirm or remember user’s design wishes (Japanese art, sakura, modern, bilingual, etc.).
- Sometimes made changes without step-by-step confirmation.
- Did not always ensure that all files were updated and changes were visible.
- Did not always check for or clear template, browser, or build caches.
- Did not always reference onboarding or project philosophy in guidance.

**Lesson:** Always read onboarding and requirements first, confirm user wishes, and proceed step by step with transparency and best practices.

## 3. Step-by-Step Roadmap

### Step 1: Preparation
- [ ] Clone empty GitHub repo and confirm clean state.
- [ ] Add `.gitignore` for PHP, Node, and build artifacts.
- [ ] Commit initial state.

### Step 2: STCMS Initialization
- [ ] Install STCMS via Composer.
- [ ] Run `php vendor/bin/stcms init` to scaffold project.
- [ ] Commit all changes.

### Step 3: Frontend Setup
- [ ] Run `npm install` to install frontend dependencies.
- [ ] Add/commit lockfiles and config.

### Step 4: Project Structure & Content
- [ ] Create folders for English and German pages (`pages/en/`, `pages/de/`).
- [ ] Scaffold landing, about, and contact pages in both languages.
- [ ] Add your photo to `public/assets/images/me.jpg`.
- [ ] Add React components for Timeline and ContactForm.
- [ ] Commit after each major step.

### Step 5: Design & Theming
- [ ] Implement full-screen sakura blossom SVG/CSS background.
- [ ] Create a custom, minimalist navbar with Japanese motif.
- [ ] Apply modern, floating content style to all main pages.
- [ ] Commit design changes.

### Step 6: Multilingual & Navigation
- [ ] Implement language switcher (using STCMS router).
- [ ] Ensure all content is available in both languages.
- [ ] Test navigation and language switching.

### Step 7: Contact Form & Interactivity
- [ ] Implement React-powered contact form (bilingual, styled).
- [ ] Implement React-powered timeline (bilingual, styled).
- [ ] Commit after each feature.

### Step 8: Testing & Polish
- [ ] Test in all major browsers and on mobile.
- [ ] Check for accessibility and responsiveness.
- [ ] Polish design, animations, and details.
- [ ] Final commit before deployment.

### Step 9: Deployment & Documentation
- [ ] Set up deployment workflow (optional: GitHub Actions, FTP, etc.).
- [ ] Write clear documentation in README.md and road.me.
- [ ] Tag initial release.

---

**Always:**
- Read and follow AI_ONBOARDING.md and user wishes.
- Use Git for every major step.
- Confirm with user before major changes.
- Document all steps and decisions. 
