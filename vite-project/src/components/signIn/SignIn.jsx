import React from "react";

class SignIn extends React.Component {
  render() {
    return(
      <div>
        <form action="" method="get">
          <input type='text' placeholder="NickName" required/>
          <input type='text' placeholder="Password" required/>
          <button type="submit">SignIn</button>
        <form/>
      </div>
    )
  }
}

export default SignIn