import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form action="" method="post">
        <input type="text" placeholder="write your personal lore for the game" />
        <input type="text" placeholder="write your personal role for the game" />
        <input type='number' placeholder="write value of your HP" />
        <button type="button">HELL YEAH</button>
      </form>
    )
  }
}

export default Form