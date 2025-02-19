import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, deletePost } from '../services/api';

export default function ItemList({ onEdit }) {
  const queryClient = useQueryClient();

  // Fetch posts using React Query
  const { data, isLoading, error } = useQuery(['posts'], fetchPosts);

  // Delete post mutation
  const deletePostMutation = useMutation((id) => deletePost(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']); // Refresh the list after deletion
    },
  });

  // Handle delete action
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePostMutation.mutate(id);
    }
  };

  // Display loading state
  if (isLoading) return <div>Loading...</div>;

  // Display error state
  if (error) return <div>Error: {error.message}</div>;

  // Display the list of posts
  return (
    <div className="space-y-4">
      {data.map((post) => (
        <div key={post.id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.body}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => onEdit(post)} // Pass the post to the parent component for editing
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)} // Delete the post
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}