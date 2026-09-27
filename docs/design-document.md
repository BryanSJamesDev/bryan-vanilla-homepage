# Design Document: Bryan Samuel James Homepage

## 1. Project Description

This project is a personal homepage for Bryan James, a graduate CS student,
built as a static, framework-free site (vanilla HTML5, CSS3, ES6 modules;
no backend, no component libraries, no jQuery). The goal is to give visitors
(recruiters, classmates, collaborators) a fast, honest first impression of
who Bryan is and a quick path into his project work, without the overhead
of a full portfolio framework. The site consists of three pages: a homepage
with an interactive "honeycomb" grid of projects, a Projects page with more
detail per project, and a clearly labeled AI-generated companion page.

**Goals**

- Load fast and work without JavaScript for the core content (progressive
  enhancement: JS only adds theme toggle, greeting, and hex captions).
- Make it obvious within 10 seconds who Bryan is and what he's worked on.
- Provide one genuinely interactive, original element (the honeycomb grid)
  rather than a static list of links.
- Be accessible: keyboard-navigable hex grid, alt text on every image,
  semantic HTML, sufficient color contrast in both light and dark themes.

**Non-goals**

- No contact form or backend of any kind (this is a static page).
- No CMS or dynamic content: all copy is hand-authored or checked in.
- No design system/component library (Bootstrap grid utilities are allowed
  by the rubric but this build uses plain flexbox/grid instead).

## 2. User Personas

### Persona A: "Recruiting Riya," Technical Recruiter

- **Background**: Works for a mid-size tech company, screens 30+ candidate
  profiles a week, spends under a minute on each personal site before
  deciding whether to open the resume.
- **Goals**: Quickly confirm the candidate's focus area (AI/full-stack),
  see 2-3 concrete projects, and find a resume/GitHub link fast.
- **Frustrations**: Portfolio sites that require scrolling through a wall of
  text before reaching any project links; broken or dead links.
- **How this site helps her**: The hero section states the focus area in
  one sentence; the honeycomb grid puts six project links in the first
  screen with hover captions that summarize each in one line.

### Persona B: "Classmate Carlos," Fellow MSCS Student

- **Background**: In the same program as Bryan, wants to see how classmates
  approached the same assignment for inspiration and possibly to team up on
  a future hackathon.
- **Goals**: See the code quality and creative choices, understand what
  Bryan is interested in (to gauge a good hackathon-team fit), find the
  GitHub repo to look at the source.
- **Frustrations**: Sites with no visible link to source code, or with
  content so generic it doesn't reveal anything about the person.
- **How this site helps him**: A visible GitHub link in the nav on every
  page, a Projects page listing hackathon builds by name, and a README with
  a full breakdown of tools and structure.

### Persona C: "Grader Grace," Course TA/Instructor

- **Background**: Reviewing the assignment against a fixed rubric: design
  document, deployed page, meta tags, ES6 modules, accessibility, GenAI
  disclosure, etc.
- **Goals**: Quickly verify each rubric line item is satisfiable by
  inspecting the page and the repo.
- **Frustrations**: Missing README sections, undisclosed AI usage, JS that
  throws console errors, non-semantic markup (div-soup buttons).
- **How this site helps her**: Every rubric item maps to something visible,
  meta tags in `<head>`, `type="module"` scripts, a GenAI section in the
  README, real `<button>`/`<a>` elements, and this design document.

## 3. User Stories

**Story 1: Riya scans for fit in under a minute**

> As a recruiter with a stack of candidates to review, I land on Bryan's
> homepage from his resume link. I read the one-sentence hero subtitle and
> immediately know he works on AI agents and full-stack apps. I hover over
> two of the honeycomb hexagons, see one-line summaries, and click through
> to the GitHub repo for the one closest to our team's stack, all in under
> 45 seconds, without needing to scroll past a long bio first.

**Story 2: Carlos evaluates a potential hackathon teammate**

> As a classmate deciding who to team up with for the next hackathon, I open
> Bryan's Projects page and scan the six cards. I notice two hackathon
> builds (Parity Agent, Triage Control) that match the kind of fast,
> scrappy projects I enjoy. I click through to the GitHub repos, skim the
> READMEs, and message Bryan to team up: the Projects page gave me enough
> signal to make that call without a phone screen.

**Story 3: Grace checks the assignment against the rubric**

> As the TA grading this assignment, I open the deployed GitHub Pages link,
> view source, and confirm the `<script type="module">` tag, meta
> description/author tags, and semantic `<button>`/`<nav>` elements are all
> present. I toggle dark mode to confirm the theme JS works, then open the
> README and find the "Use of Generative AI" section with the exact prompts
> used, so I can grade that line item with confidence.

## 4. Design Mockups

Low-fidelity wireframes for the three pages are in this folder:

- `wireframe-home.svg`: homepage, nav, hero, about, honeycomb grid, footer
- `wireframe-projects.svg`: Projects page, nav, intro, responsive card grid
- `wireframe-ai-page.svg`: AI Playground page, nav, AI-disclosure banner, bio content

Color and type direction: a cool blue accent (`#3a5bff` light / `#7d97ff`
dark) on a neutral gray background for the main site, with a distinct warm
amber banner and serif type on the AI-generated page so it visually reads as
a separate "voice" from the hand-authored pages.
