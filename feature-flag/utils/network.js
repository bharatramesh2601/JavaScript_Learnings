export const Network = {
  async fetchFlags() {
    try {
      const response = await fetch("https://api.example.com/feature-flags");
      if (!response.ok) throw new Error("Failed to fetch feature flags");
      return await response.json();
    } catch (error) {
      console.error("Error fetching feature flags:", error);
      return null;
    }
  },
};
