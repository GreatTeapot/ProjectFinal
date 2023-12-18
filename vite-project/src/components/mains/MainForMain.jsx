import React from "react";

class MainForMain extends React.Component {
  render() {
    return(
      <div className="main_container">
        <div className="main_title">
          <h2>D&D game with ChatGPT</h2>
          <p>this is text about such a good our game that you want to give all your money and maybe give 100 point you know</p>
        </div>
        <div className="main_button">
          <button><link to='/game'/>Start Game</button>
        </div>
        <div className="main_games">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default MainForMain