import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import { bindActionCreators } from 'redux';
import CreatePost from './CreatePost';
import SinglePost from './SinglePost';
import Navbar from './Navbar';
import App from '../App';

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>This is my Reactjs Blog</h1>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <App
                  {...props}
                  posts={this.props.posts}
                  addPost={this.props.addPost}
                />
              )}
            />
            <Route path="/post/newpost" component={CreatePost} />
            <Route
              path="/post/:id"
              render={props => (
                <SinglePost {...props} posts={this.props.posts} />
              )}
            />
            <Route component={() => <h2>Page was not found</h2>} />
            {/* <Route path="/posts/" component={} /> */}
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
