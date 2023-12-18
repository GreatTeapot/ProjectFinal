import React from "react";

class Form extends React.Component {
  render() {
    userRoleData = {}
  constructor(props) {
    super(props)
    this.state = {
      lore: '',
      role: '',
      HP: 1
    }
  }
    return(
      <form action="" ref={(el) => this.myRole = el} method="post">
        <input type="text" placeholder="write your personal lore for the game" onChange={(e) => this.setState({lore: e.target.value})}/>
        <input type="text" placeholder="write your personal role for the game" onChange={(e) => this.setState({role: e.target.value})}/>
        <input type='number' placeholder="write value of your HP" onChange={(e) => this.setState({HP: e.target.value})}/>
        <button type="button" onClick={() => {
          this.myRole = {
            lore: this.state.lore,
            role: this.state.role,
            HP: this.state.HP
          }
        }}>HELL YEAH</button>
      </form>
    )
  }
}

export default Form