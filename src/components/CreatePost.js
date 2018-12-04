import React from 'react';

const CreatePost = () => {
  return (
    <div>
      <form>
        <div className="title">
          <label for="title">Title</label>
          <input type="text" />
        </div>
        <div className="category">
          <label for="category">Category</label>
          <input type="text" />
        </div>
        <div className="content">
          <label for="content">Content</label>
          <input type="textarea" />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
