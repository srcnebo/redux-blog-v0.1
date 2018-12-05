import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList';
import { withRouter } from 'react-router';

class App extends Component {
  add = () => {
    this.props.addPost('title', 'category', 'content');
  };
  render() {
    return (
      <div className="App">
        <PostList {...this.props} />
        <button onClick={() => this.add()}>AddPOst</button>
      </div>
    );
  }
}
export default withRouter(App);
