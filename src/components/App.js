import React, { Component } from 'react';
import '../App.css';

import AuthorForm from './AuthorForm.js';
import AuthorList from './AuthorList.js';
import PostContainer from './PostContainer.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {authorId: ' '}
  }

  //PAYLOAD: "AUTHOR"
  addAuthor(payload) {
    store.dispatch({type: 'ADD_AUTHOR', payload: payload})
  }

  //PAYLOAD: AUTHOR_ID
  selectAuthor(payload) {
    store.dispatch({type: 'SELECT_AUTHOR', payload: payload})
  }

  //PAYLOAD: [AUTHOR_ID, "TITLE", "CONTENT"]
  addPost(payload) {
    store.dispatch({type: 'ADD_POST', payload: payload})
  }

  render() {
    return (
      <div className="App">
        <h1>BEAUTIFUL BLOG APP</h1>
        <AuthorForm />
        <AuthorList />
        <br />
        <PostContainer />
      </div>
    );
  }
}

export default App;
