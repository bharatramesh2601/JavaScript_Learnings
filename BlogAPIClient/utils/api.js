export const API = {
  baseUrl: "https://jsonplaceholder.typicode.com/posts", // Example API

  async request(endpoint, method = "GET", data = null) {
    const options = { method, headers: { "Content-Type": "application/json" } };

    if (data) options.body = JSON.stringify(data);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      return null;
    }
  },
};
