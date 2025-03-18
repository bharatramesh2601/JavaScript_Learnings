export const Storage = {
  saveEvent(event) {
    let events = JSON.parse(localStorage.getItem("analytics_events")) || [];
    events.push(event);
    localStorage.setItem("analytics_events", JSON.stringify(events));
  },

  getEvents() {
    return JSON.parse(localStorage.getItem("analytics_events")) || [];
  },

  clearEvents() {
    localStorage.removeItem("analytics_events");
  },
};
