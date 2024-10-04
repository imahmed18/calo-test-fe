import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastNotify } from '../../../../App';
import { paths } from '../../../../routes/paths';
import jobService from '../../services/jobService';

export const getJob = createAsyncThunk('get-job', async (payload, thunkAPI) => {
  try {
    const response = await jobService.get(payload);
    return response;
  } catch (error) {
    const { data } = error.response;
    toastNotify('error', data.message);
    if (data.code === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = paths.auth.login;
    }
    return thunkAPI.rejectWithValue(error);
  }
});
