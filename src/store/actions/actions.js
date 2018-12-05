import { ADD_POST, DELETE_POST } from './actionTypes';

export const addPost = data => {
  return {
    type: ADD_POST,
    data
  };
};

export const deletePost = id => {
  return {
    type: DELETE_POST,
    id
  };
};
