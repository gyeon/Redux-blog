import React from 'react'

class AuthorList extends React.Component {
  render() {
    return(
      <div className="AuthorList">
        <select type="dropdown">
        <option value="Authors">Choose Author</option>
        </select>
      </div>

    )
  }
}

export default AuthorList;
