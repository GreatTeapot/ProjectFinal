import React from "react";

class SignUp extends React.Component {
  render() {
    return(
      <form action="" method="get">
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="password again" />
        <button type="submit">SignUp</button>
      </form>
    )
  }
}

export default SignUp