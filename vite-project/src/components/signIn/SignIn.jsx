import React from "react";

class SignIn extends React.Component {
  render() {
    return(
      <form action="" method="get">
        <input type="text" placeholder="username" required/>
        <input type="text" placeholder="password" required/>
        <button type="submit">SignIn</button>
      </form>
    )
  }
}

export default SignIn