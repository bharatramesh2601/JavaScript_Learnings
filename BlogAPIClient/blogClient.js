import { API } from "./utils/api.js";

class BlogClient {
  // ✅ Fetch all blog posts
  async getAllPosts() {
    return await API.request("/", "GET");
  }

  // ✅ Fetch a single post by ID
  async getPostById(postId) {
    return await API.request(`/${postId}`, "GET");
  }

  // ✅ Create a new post
  async createPost(title, body, userId = 1) {
    const newPost = { title, body, userId };
    return await API.request("/", "POST", newPost);
  }

  // ✅ Update a blog post
  async updatePost(postId, updatedData) {
    return await API.request(`/${postId}`, "PUT", updatedData);
  }

  // ✅ Delete a blog post
  async deletePost(postId) {
    return await API.request(`/${postId}`, "DELETE");
  }
}

export const blogClient = new BlogClient();
