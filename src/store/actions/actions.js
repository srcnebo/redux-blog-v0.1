import { ADD_POST, DELETE_POST, EDIT_POST } from './actionTypes';

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

export const editPost = (data, id) => {
  return {
    type: EDIT_POST,
    data,
    id
  };
};
