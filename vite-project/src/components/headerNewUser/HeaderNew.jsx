import React from "react";

class HeaderNew extends React.Component {
  render() {
    return(
      <header>
        <div className="title">
          <h1>Нейросеть</h1>
        </div>
        <div className="buttons">
          <button className="log"><link to='/login'/>SignIn</button>
          <button className="reg"><link to='/register'/>SignUp</button>
        </div>
      </header>
    )
  }
}

export default HeaderNew