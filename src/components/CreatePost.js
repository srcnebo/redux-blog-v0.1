import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatePost extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const category = this.getCategory.value;
    const content = this.getContent.value;
    const data = {
      id: Math.floor(Date.now() / 1000),
      title,
      category,
      content
    };
    this.props.addPost(data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              ref={input => (this.getTitle = input)}
              placeholder="Enter Post Title"
            />
          </div>
          <div className="category">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              ref={input => (this.getCategory = input)}
              placeholder="Post Tags"
            />
          </div>
          <div className="content">
            <label htmlFor="content">Content:</label>
            <input
              id="content"
              type="textarea"
              rows="5"
              cols="28"
              ref={input => (this.getContent = input)}
              placeholder="Enter Post"
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(CreatePost);
