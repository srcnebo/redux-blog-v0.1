import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
  render() {
    const posts = this.props.posts;

    return posts.map((post, i) => {
      return (
        <div className="post-grid-item">
          <Link to={'/post/' + post.id}>
            <div key={'title' + i}>{post.title}</div>
          </Link>
          <div key={'category' + i}>{post.category}</div>
        </div>
      );
    });
  }
}
export default PostList;
