export const Network = {
  async sendEvents(events) {
    try {
      const response = await fetch("https://analytics-server.com/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ events }),
      });

      if (response.ok) {
        console.log("Analytics data sent successfully!");
        return true;
      } else {
        console.error("Failed to send analytics data.");
        return false;
      }
    } catch (error) {
      console.error("Network error:", error);
      return false;
    }
  },
};
