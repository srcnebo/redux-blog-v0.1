import { ADD_POST } from '../actions/actionTypes';
import { DELETE_POST } from '../actions/actionTypes';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      console.log('add post case');
      return state;
    case DELETE_POST:
      console.log('delete post case good');
      return state;
    default:
      console.log('default');
      return state;
  }
};

export default postsReducer;
