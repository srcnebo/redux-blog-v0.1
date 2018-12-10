import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList';
import { withRouter } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList {...this.props} />
      </div>
    );
  }
}
export default withRouter(App);
