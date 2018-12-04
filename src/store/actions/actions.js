import { ADD_POST, DELETE_POST } from './actionTypes';

export const addPost = (title, category, content) => {
  console.log(title, category, content);
  return {
    type: ADD_POST,
    title,
    category,
    content
  };
};

export const deletePost = id => {
  return {
    type: DELETE_POST,
    id
  };
};
