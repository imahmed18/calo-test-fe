import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJob } from './../redux/jobs/thunk/get/getJob.thunk';
import { ListComponent } from '../components/List/List';
import { Link } from 'react-router-dom';

const JobListing = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.job.get.list) || [];

  useEffect(() => {
    dispatch(getJob());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-row justify-between mb-8'>
        <h4 className='text-3xl font-semibold'>JobListing</h4>
        <Link className='bg-cyan-700 rounded-md py-2 px-4' to="/create">
          <p className='text-white'>Create New Job</p>
        </Link>
      </div>
      <ListComponent jobs={jobList} />
    </div>
  );
};

export default JobListing;
