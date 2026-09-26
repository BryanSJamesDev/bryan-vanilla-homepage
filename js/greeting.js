// greeting.js: time-of-day greeting and a simple return-visit counter.
const VISIT_KEY = "bryan-homepage-visits";

export function setTimeAwareGreeting(headingEl) {
  const hour = new Date().getHours();
  let timeOfDay = "evening";
  if (hour < 12) timeOfDay = "morning";
  else if (hour < 18) timeOfDay = "afternoon";

  headingEl.textContent = `Good ${timeOfDay}, I'm Bryan.`;
}

export function trackVisit(counterEl) {
  const visits = Number(localStorage.getItem(VISIT_KEY) || "0") + 1;
  localStorage.setItem(VISIT_KEY, String(visits));

  const label = visits === 1 ? "first visit, welcome!" : `visit #${visits}`;
  counterEl.textContent = `This is your ${label}`;
}
