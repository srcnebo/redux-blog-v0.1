import postsReducer from './postsReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  posts: postsReducer
});

export default rootReducers;
