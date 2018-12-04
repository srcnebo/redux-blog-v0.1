import React, { Component } from 'react';

class SinglePost extends Component {
  render() {
    const i = this.props.match.params.id;
    const post = this.props.posts[i];

    return (
      <div>
        <h1>Title:{post.title}</h1>
        <h2>Auther:{post.category}</h2>
        <p>
          Summary:
          <br />
          {post.content}
        </p>
      </div>
    );
  }
}

export default SinglePost;
