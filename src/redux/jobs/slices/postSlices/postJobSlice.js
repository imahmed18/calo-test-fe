export const POST_JOB = {
    pending: (state, action) => {
      state.post.isLoading = true;
      state.post.isSuccess = false;
      state.post.isError = false;
      state.post.message = '';
    },
    fulfilled: (state, action) => {
      state.post.isLoading = false;
      state.post.isSuccess = true;
      state.post.isError = false;
      state.post.message = action?.payload?.data?.data?.message;
    },
    rejected: (state, action) => {
      state.post.isLoading = false;
      state.post.isSuccess = false;
      state.post.isError = true;
      state.post.message = action?.payload?.data?.data?.message;
    },
  };
  