// theme.js: dark/light theme toggle persisted in localStorage.
const STORAGE_KEY = "bryan-homepage-theme";

export function initTheme(toggleButton) {
  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");

  applyTheme(theme);
  toggleButton.setAttribute("aria-pressed", String(theme === "dark"));
  toggleButton.textContent = theme === "dark" ? "☀️" : "🌙";

  toggleButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    toggleButton.setAttribute("aria-pressed", String(next === "dark"));
    toggleButton.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}
