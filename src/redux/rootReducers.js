import { combineReducers } from '@reduxjs/toolkit';
import JobSlice from './jobs/slices/jobSlice';

const rootReducer = combineReducers({
    job: JobSlice,
});

export default rootReducer;
