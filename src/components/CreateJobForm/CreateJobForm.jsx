import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Label, TextInput } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { postJob } from '../../redux/jobs/thunk/post/postJob.thunk';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/paths';

export function CreateJobForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(postJob(data)).unwrap();
      navigate(paths.PATH_JOB.root);
    } catch (error) {
      console.error('Failed to post job:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Job Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Pasta"
          required
          {...register('name', { required: 'Job name is required' })}
        />
        {errors.name && <span className="text-red-600">{errors.name.message}</span>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="category" value="Job Category" />
        </div>
        <TextInput
          id="category"
          type="text"
          placeholder="Food"
          required
          {...register('category', { required: 'Job category is required' })}
        />
        {errors.category && <span className="text-red-600">{errors.category.message}</span>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
