import React, { useEffect } from 'react';
import { JobDetailCard } from '../components/JobDetailCard/JobDetailCard';
import { useDispatch, useSelector } from 'react-redux';
import { getJobById } from '../redux/jobs/thunk/get/getJobById.thunk';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const jobDetails = useSelector((state) => state.job.get.jobById) || null;

  useEffect(() => {
    dispatch(getJobById(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h4 className='text-3xl font-semibold mb-8'>Job Details</h4>
      <JobDetailCard jobDetails={jobDetails} />
    </div>
  );
};

export default JobDetails;
