import React from 'react'

class AuthorForm extends React.Component {
  render() {
    return(
      <form className="AuthorForm">
        <input type="text" placeholder="add author" />
        <input type="submit" />
      </form>
    )
  }
}

export default AuthorForm;
