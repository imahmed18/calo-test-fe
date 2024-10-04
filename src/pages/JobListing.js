import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJob } from './../redux/jobs/thunk/get/getJob.thunk';

const JobListing = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.job.get.list) || [];

  useEffect(() => {
    dispatch(getJob());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <h4>JobListing</h4>
    <ul>
        {jobList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default JobListing;
