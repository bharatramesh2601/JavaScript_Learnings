import { analytics } from "./analytics.js";

// ✅ Start auto-tracking page views
analytics.autoTrack();

// ✅ Track user interactions
document.getElementById("btn-click").addEventListener("click", () => {
  analytics.track("button_click", { buttonId: "btn-click" });
});

// ✅ Check for offline events on page load
window.addEventListener("load", () => {
  analytics.checkStoredEvents();
});
