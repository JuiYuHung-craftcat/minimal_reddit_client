import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
  subreddits: [],
  error: false,
  isLoading: false
};

const subRedditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    getSubredditsLoading(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false;
      state.error = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    }
  },
});

export const { getSubredditsLoading, getSubredditsSuccess, getSubredditsFailed } = subRedditsSlice.actions;

// Async Thunk
export const fetchSubreddits = () => async (dispatch) => {
  try {
    dispatch(getSubredditsLoading());
    const subreddits = await getSubreddits();
    dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditsFailed());
  }
};


export default subRedditsSlice.reducer;
export const selectSubreddits = (state) => state.subreddits.subreddits;
