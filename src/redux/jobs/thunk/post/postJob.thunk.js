import { createAsyncThunk } from '@reduxjs/toolkit';
import jobService from '../../services/jobService';

export const postJob = createAsyncThunk('post-job', async (payload, thunkAPI) => {
    try {
        const response = await jobService.post(payload);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
