import React from 'react'
import CreateNewPost from './CreateNewPost.js';
import PostsList from './PostsList.js';

class PostContainer extends React.Component {
  render() {
    return(
      <div className="PostContainer">
        <CreateNewPost />
        <PostsList />
      </div>

    )
  }
}

export default PostContainer;
