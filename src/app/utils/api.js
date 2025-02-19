// src/utils/api.js

// Fetch all posts
export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  };
  
  // Create a new post
  export const createPost = async (post) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return response.json();
  };
  
  // Update an existing post
  export const updatePost = async (post) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
    return response.json();
  };
  
  // Delete a post
  export const deletePost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return response.json();
  };