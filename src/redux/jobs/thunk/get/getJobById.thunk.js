import { createAsyncThunk } from '@reduxjs/toolkit';
import jobService from '../../services/jobService';

export const getJobById = createAsyncThunk('get-job-by-id', async (payload, thunkAPI) => {
    try {
        const response = await jobService.getById(payload);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
