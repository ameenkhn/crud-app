import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  body: z.string().min(1, 'Body is required'),
});

export default function UpdatePostForm({ post, onSubmit, onCancel }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: post.title,
      body: post.body,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">Title</label>
        <input {...register('title')} className="input input-bordered w-full" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div>
        <label className="block">Body</label>
        <textarea {...register('body')} className="textarea textarea-bordered w-full" />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
      </div>
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">Update</button>
        <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>
      </div>
    </form>
  );
}