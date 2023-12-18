import React from "react";

class HeaderNew extends React.Component {
  render() {
    return(
      <header>
        <div className="title">
          <h1>Нейросеть</h1>
        </div>
        <div className="buttons">
          <button className="log">SignIn</button>
          <button className="reg">SignUp</button>
        </div>
      </header>
    )
  }
}

export default HeaderNew