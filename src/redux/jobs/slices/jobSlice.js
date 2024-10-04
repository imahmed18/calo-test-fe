import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { GET_JOB } from './getSlices/getJobSlice';
import { GET_JOB_BY_ID } from './getSlices/getJobByIdSlice';
import { POST_JOB } from './postSlices/postJobSlice';
import { getJob } from '../thunk/get/getJob.thunk';
import { getJobById } from '../thunk/get/getJobById.thunk';
import { postJob } from '../thunk/post/postJob.thunk';

export const JobSlice = createSlice({
  name: 'JobSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(getJob.pending, GET_JOB.pending)
      .addCase(getJob.fulfilled, GET_JOB.fulfilled)
      .addCase(getJob.rejected, GET_JOB.rejected)

      // GET by ID
      .addCase(getJobById.pending, GET_JOB_BY_ID.pending)
      .addCase(getJobById.fulfilled, GET_JOB_BY_ID.fulfilled)
      .addCase(getJobById.rejected, GET_JOB_BY_ID.rejected)

      // POST
      .addCase(postJob.pending, POST_JOB.pending)
      .addCase(postJob.fulfilled, POST_JOB.fulfilled)
      .addCase(postJob.rejected, POST_JOB.rejected)
  },
});

export default JobSlice.reducer;
