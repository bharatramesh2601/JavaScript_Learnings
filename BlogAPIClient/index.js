import { blogClient } from "./blogClient.js";

(async () => {
  // ✅ Fetch all posts
  console.log("Fetching all blog posts...");
  const posts = await blogClient.getAllPosts();
  console.log(posts);

  // ✅ Fetch a single post
  console.log("\nFetching post with ID 1...");
  const singlePost = await blogClient.getPostById(1);
  console.log(singlePost);

  // ✅ Create a new post
  console.log("\nCreating a new blog post...");
  const newPost = await blogClient.createPost(
    "New Blog Post",
    "This is the content of the post."
  );
  console.log(newPost);

  // ✅ Update a post
  console.log("\nUpdating post with ID 1...");
  const updatedPost = await blogClient.updatePost(1, {
    title: "Updated Title",
    body: "Updated Content",
  });
  console.log(updatedPost);

  // ✅ Delete a post
  console.log("\nDeleting post with ID 1...");
  const deleteResponse = await blogClient.deletePost(1);
  console.log("Deleted:", deleteResponse);
})();
