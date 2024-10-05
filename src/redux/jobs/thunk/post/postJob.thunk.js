import { createAsyncThunk } from '@reduxjs/toolkit';
import jobService from '../../services/jobService';
import { toastNotify } from '../../../../App';

// Function to send offline jobs when online
const sendOfflineJobs = async () => {
    const offlineJobs = JSON.parse(localStorage.getItem('offlineJobs')) || [];
    const remainingJobs = [];

    for (const job of offlineJobs) {
        try {
            await jobService.post(job);
        } catch (error) {
            console.error('Failed to send offline job:', error);
            /**
             * storing the pending job again into local storage to 
               try again later since network error signifies the unavailability 
               of backend for any reason
             */
            if (error.code === 'ERR_NETWORK') {
                remainingJobs.push(job);
            }
        }
    }

    if (remainingJobs.length > 0) {
        localStorage.setItem('offlineJobs', JSON.stringify(remainingJobs));
    } else {
        localStorage.removeItem('offlineJobs');
    }
};

export const postJob = createAsyncThunk('post-job', async (payload, thunkAPI) => {
    try {
        if (navigator.onLine) {
            const response = await jobService.post(payload);
            toastNotify('info', 'Job posted successfully');
            return response;
        } else {
            const offlineJobs = JSON.parse(localStorage.getItem('offlineJobs')) || [];
            offlineJobs.push(payload);
            localStorage.setItem('offlineJobs', JSON.stringify(offlineJobs));
            return thunkAPI.rejectWithValue({ message: 'You are currently offline. Your job will be posted once you are back online' });
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const setupOfflineJobHandler = () => {
    window.addEventListener('online', sendOfflineJobs);
};

setupOfflineJobHandler();
