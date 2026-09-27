# Bryan Samuel James: Vanilla Homepage

## Author

Bryan Samuel James, [github.com/BryanSJamesDev](https://github.com/BryanSJamesDev) · [LinkedIn](https://linkedin.com/in/bryan-james-1530891b3)

## Class Link

<!-- TODO: replace with your actual Canvas/course page URL -->

[Course page](https://northeastern.instructure.com/courses/261032)

## Project Objective

A framework-free personal homepage built with vanilla HTML5, CSS3, and ES6
modules: no backend, no component libraries, no jQuery, for a web
development course assignment. The page introduces me and links out to a
handful of my software projects through an interactive honeycomb grid, the
site's creative/differentiating feature.

## Screenshot

<!-- TODO: replace with a real screenshot once deployed, e.g. images/screenshot.png -->

![Homepage screenshot placeholder](./images/screenshot.png)

## Live Site

<!-- TODO: replace with your GitHub Pages URL once deployed -->

https://bryansjamesdev.github.io/bryan-vanilla-homepage/

## Pages

- `index.html`: homepage with hero, about section, and the honeycomb project grid
- `projects.html`: a project-by-project breakdown as a responsive card grid
- `ai-generated.html`: clearly labeled AI-generated companion page (see below)

## Project Structure

```
.
├── index.html
├── projects.html
├── ai-generated.html
├── css/
│   ├── styles.css        # shared layout, header, hero, honeycomb, footer
│   ├── projects.css      # Projects page grid
│   └── ai-generated.css  # AI Playground page styling
├── js/
│   ├── main.js           # ES6 module entry point
│   ├── theme.js          # dark/light theme toggle (localStorage)
│   ├── greeting.js       # time-of-day greeting + visit counter
│   └── honeycomb.js      # hex-grid hover/focus captions
├── images/
├── package.json
├── eslint.config.js
├── .prettierrc.json
└── LICENSE
```

## Instructions to Build / Run Locally

No build step is required, this is a static site.

1. Clone the repo:
   ```bash
   git clone https://github.com/REPLACE_ME/REPLACE_ME.git
   cd REPLACE_ME
   ```
2. Install dev dependencies (Prettier + ESLint, used only for linting/formatting):
   ```bash
   npm install
   ```
3. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```
4. Check formatting and lint before committing:
   ```bash
   npm run format
   npm run lint
   ```

## Deployment

Deployed as a static site via GitHub Pages (Settings → Pages → deploy from
the `main` branch, root folder).

## Use of Generative AI

