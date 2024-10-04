export const GET_JOB_BY_ID = {
    pending: (state, action) => {
      state.get.isLoading = true;
      state.get.isSuccess = false;
      state.get.isError = false;
      state.get.message = '';
    },
    fulfilled: (state, action) => {
      state.get.jobById = action?.payload?.data;
      state.get.isLoading = false;
      state.get.isSuccess = true;
      state.get.isError = false;
      state.get.message = action?.payload?.data?.data?.message;
    },
    rejected: (state, action) => {
      state.get.isLoading = false;
      state.get.isSuccess = false;
      state.get.isError = true;
      state.get.message = action?.payload?.data?.data?.message;
    },
  };
  