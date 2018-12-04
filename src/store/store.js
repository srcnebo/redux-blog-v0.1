import { createStore } from 'redux';
import rootReducers from './reducers/index';
import { posts } from '../data/posts';

const defaultState = {
  posts
};

const store = createStore(rootReducers, defaultState);

export default store;
