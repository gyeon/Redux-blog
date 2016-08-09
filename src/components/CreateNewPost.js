import React from 'react'

class CreateNewPost extends React.Component {
  render() {
    return(
      <form className="PostForm" id="PostForm">
        <input type="text" placeholder="title" name="title"/>
        <br />
        <textarea placeholder="content" form="PostsForm" cols="40" rows="20"/>
        <br />
        <input type="submit" />
      </form>
    )
  }
}

export default CreateNewPost;
