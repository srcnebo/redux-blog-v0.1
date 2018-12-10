import { ADD_POST, EDIT_POST } from '../actions/actionTypes';
import { DELETE_POST } from '../actions/actionTypes';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      console.log('add post case');
      return state.concat([action.data]);
    case DELETE_POST:
      console.log('delete post case good');
      return state.filter(post => post.id !== action.id);
    case EDIT_POST:
      console.log('editing post works');
      return state.map(post => post.id === action.id);
    default:
      console.log('default');
      return state;
  }
};

export default postsReducer;
