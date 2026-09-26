// honeycomb.js: updates a live caption as the visitor explores the hex grid.
export function initHoneycombCaptions(honeycombEl, captionEl) {
  const hexes = honeycombEl.querySelectorAll(".hex");

  hexes.forEach((hex) => {
    const show = () => {
      const title = hex.dataset.title;
      const desc = hex.dataset.desc;
      captionEl.textContent = `${title}: ${desc}`;
    };
    const reset = () => {
      captionEl.textContent = "Hover or focus a hexagon to read about the project.";
    };

    hex.addEventListener("mouseenter", show);
    hex.addEventListener("focus", show);
    hex.addEventListener("mouseleave", reset);
    hex.addEventListener("blur", reset);
  });
}
