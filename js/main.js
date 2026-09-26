// main.js: entry point, wired up as an ES6 module from index.html.
import { initTheme } from "./theme.js";
import { setTimeAwareGreeting, trackVisit } from "./greeting.js";
import { initHoneycombCaptions } from "./honeycomb.js";

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    initTheme(themeToggle);
  }

  const heading = document.getElementById("hero-greeting");
  if (heading) {
    setTimeAwareGreeting(heading);
  }

  const counter = document.getElementById("visit-counter");
  if (counter) {
    trackVisit(counter);
  }

  const honeycomb = document.getElementById("honeycomb");
  const caption = document.getElementById("hex-caption");
  if (honeycomb && caption) {
    initHoneycombCaptions(honeycomb, caption);
  }
});
