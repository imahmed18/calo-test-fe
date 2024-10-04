import React from 'react';
import { CreateJobForm } from '../components/CreateJobForm/CreateJobForm';

const CreateJob = () => {

  return (
    <div className='container mx-auto p-4'>
      <h4 className='text-3xl font-semibold mb-8'>Create New Job</h4>
      <CreateJobForm />
    </div>
  );
};

export default CreateJob;
