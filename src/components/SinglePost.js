import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import EditPost from './EditPost';

class SinglePost extends Component {
  render() {
    const i = this.props.match.params.id;
    const posts = this.props.posts;

    const handleDelete = id => {
      this.props.deletePost(id);
    };
    const handleEdit = (data, id) => {
      this.props.editPost(data, id);
    };

    return posts
      .filter(post => post.id === Number(i))
      .map((item, key) => (
        <div className="single-post" key={'post' + key}>
          <h1>Title:{item.title}</h1>
          <h2>Auther:{item.category}</h2>
          <p>
            Summary:
            <br />
            {item.content}
          </p>
          <button className="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
          <Link to={'/edit/' + item.id}>
            <button
              className="button"
              onClick={() => handleEdit(item, item.id)}
            >
              Edit
            </button>
          </Link>
        </div>
      ));
  }
}

export default SinglePost;

// class SinglePost extends Component {
//   render() {
//     const i = this.props.match.params.id;
//     const post = this.props.posts[i];

//     return (
//       <div>
//         <h1>Title:{post.title}</h1>
//         <h2>Auther:{post.category}</h2>
//         <p>
//           Summary:
//           <br />
//           {post.content}
//         </p>
//       </div>
//     );
//   }
// }

// export default SinglePost;
