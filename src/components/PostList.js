import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
  render() {
    const posts = this.props.posts;
    return <h1>Posts lists comp</h1>;
  }
}
export default PostList;
