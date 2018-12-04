import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SinglePost from './components/SinglePost';
import PostList from './components/PostList';

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
export default App;
