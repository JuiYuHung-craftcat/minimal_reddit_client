import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subRedditsReducer from './subRedditsSlice';
import redditReducer from './redditSlice';

export default configureStore({
  reducer: combineReducers({
    subreddits: subRedditsReducer,
    reddit: redditReducer,
  }),
});
