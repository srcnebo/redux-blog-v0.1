import React from 'react';
import SinglePost from './SinglePost';

const GetPostId = ({ match }) => {
  return (
    <SinglePost
      post={this.props.posts.find(post => {
        return post.id === parseInt(match.params.id, 10);
      })}
      // handleDelete={this.handleDelete}
    />
  );
};

export default GetPostId;

// const GetPostId = ({ match }) => {
//   return (
//     <SinglePost
//       post={this.state.posts.find(post => {
//         return post.id === parseInt(match.params.postId, 10);
//       })}
//       handleDelete={this.handleDelete}
//     />
//   );
// };
