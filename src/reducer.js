
function reducer(state = {author: [], posts: [], action = {type: ''}){
  switch(action.type){
    case 'ADD_AUTHOR':
      let authors = store.authors.concat(action.payload)
      return Object.assign({}, {authors: authors}, {posts: store.posts})
    case 'SELECT_AUTHOR':
      return
    case 'ADD_POST':
      let posts = store.posts.concat(action.payload)
      return Object.assign({}, {authors: store.authors}, {posts: posts})
    default:
      return state
  }
}


export default reducer;
