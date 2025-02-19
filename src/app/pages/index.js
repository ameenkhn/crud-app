import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, createPost, updatePost, deletePost } from '../utils/api';
import CreatePostForm from '../components/CreatePostForm';
import UpdatePostForm from '../components/UpdatePostForm';
import ItemList from '../components/ItemList';

export default function Home() {
  const queryClient = useQueryClient();
  const [postToEdit, setPostToEdit] = useState(null);

  // Fetch posts
  const { data, isLoading, error } = useQuery(['posts'], fetchPosts);

  // Create post mutation
  const createPostMutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  // Update post mutation
  const updatePostMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      setPostToEdit(null);
    },
  });

  // Delete post mutation
  const deletePostMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  // Handle create post
  const handleCreatePost = (data) => {
    createPostMutation.mutate(data);
  };

  // Handle update post
  const handleUpdatePost = (data) => {
    updatePostMutation.mutate(data);
  };

  // Handle delete post
  const handleDeletePost = (id) => {
    deletePostMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {postToEdit ? (
        <UpdatePostForm
          post={postToEdit}
          onSubmit={handleUpdatePost}
          onCancel={() => setPostToEdit(null)}
        />
      ) : (
        <>
          <CreatePostForm onSubmit={handleCreatePost} />
          <ItemList
            posts={data}
            onEdit={setPostToEdit}
            onDelete={handleDeletePost}
          />
        </>
      )}
    </div>
  );
}