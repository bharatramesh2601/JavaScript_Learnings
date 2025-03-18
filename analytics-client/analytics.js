import { Storage } from "./utils/storage.js";
import { Network } from "./utils/network.js";

class Analytics {
  constructor() {
    this.events = [];
    this.userId = this.generateUserId();
    this.batchSize = 5; // Send data in batches
  }

  // ✅ Generate a unique user ID
  generateUserId() {
    let userId = localStorage.getItem("user_id");
    if (!userId) {
      userId = `user_${Date.now()}`;
      localStorage.setItem("user_id", userId);
    }
    return userId;
  }

  // ✅ Track an event
  track(eventName, eventData = {}) {
    const event = {
      userId: this.userId,
      eventName,
      eventData,
      timestamp: new Date().toISOString(),
    };

    console.log("Tracking event:", event);
    this.events.push(event);

    // Save to storage in case user goes offline
    Storage.saveEvent(event);

    // If batch size is reached, send data
    if (this.events.length >= this.batchSize) {
      this.flush();
    }
  }

  // ✅ Send collected events to server
  async flush() {
    if (this.events.length === 0) return;

    const success = await Network.sendEvents(this.events);

    if (success) {
      this.events = [];
      Storage.clearEvents(); // Clear stored events after successful send
    }
  }

  // ✅ Auto-send stored events when back online
  async checkStoredEvents() {
    const storedEvents = Storage.getEvents();
    if (storedEvents.length > 0) {
      console.log("Sending stored offline events...");
      const success = await Network.sendEvents(storedEvents);
      if (success) Storage.clearEvents();
    }
  }

  // ✅ Auto-track page views
  autoTrack() {
    this.track("page_view", { url: window.location.href });
    window.addEventListener("beforeunload", () => this.flush());
  }
}

export const analytics = new Analytics();
