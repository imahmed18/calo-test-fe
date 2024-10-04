import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJob } from './../redux/jobs/thunk/get/getJob.thunk';
import { ListComponent } from '../components/List/List';

const JobListing = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.job.get.list) || [];

  useEffect(() => {
    dispatch(getJob());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h4 className='text-3xl font-semibold mb-8'>JobListing</h4>
      <ListComponent jobs={jobList} />
    </div>
  );
};

export default JobListing;
