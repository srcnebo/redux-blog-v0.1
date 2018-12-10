import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.newTitle.value;
    const category = this.newCategory.value;
    const content = this.newContent.value;
    const data = {
      title,
      category,
      content
    };
    this.props.editPost(data, data.id);
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
              ref={input => (this.newTitle = input)}
              defaultValue={this.props.posts.title}
            />
          </div>
          <div className="category">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              ref={input => (this.newCategory = input)}
              defaultValue={this.props.posts.category}
            />
          </div>
          <div className="content">
            <label htmlFor="content">Content:</label>
            <input
              id="content"
              type="textarea"
              rows="5"
              cols="28"
              ref={input => (this.newContent = input)}
              defaultValue={this.props.posts.content}
            />
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditPost);
