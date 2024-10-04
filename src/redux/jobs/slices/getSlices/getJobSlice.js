export const GET_JOB = {
    pending: (state, action) => {
      state.get.isLoading = true;
      state.get.isSuccess = false;
      state.get.isError = false;
      state.get.message = '';
    },
    fulfilled: (state, action) => {
      state.get.list = action?.payload?.data;
      state.get.isLoading = false;
      state.get.isSuccess = true;
      state.get.isError = false;
      state.get.message = action?.payload?.data?.message;
    },
    rejected: (state, action) => {
      state.get.isLoading = false;
      state.get.isSuccess = false;
      state.get.isError = true;
      state.get.message = action?.payload?.data?.data?.message;
    },
  };
  