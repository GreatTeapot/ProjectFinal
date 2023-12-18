import React from "react";

class HeaderOld extends React.Component {
  render() {
    return(
      <header>
        <div className="title">
          <h1>Нейросеть</h1>
        </div>
        <div className="home">
          <button><link to="/home"/>Home</button>
        </div>
        <div className="exit">
          <button><link to='/logout'/>LogOut</button>
        </div>
      </header>
    )
  }
}

export default HeaderOld