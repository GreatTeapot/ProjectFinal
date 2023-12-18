import React from "react";

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div>
          <div>
            <h2>Rule of the game:</h2>
            <ul>
              <li>0 HP heh you die</li>
              <li>you should play by your role</li>
              <li>dont try break site plz</li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>Social</h2>
              <li><link href="https://www.facebook.com/dungeonsanddragons/"/>Facebook</li>
              <li><link href="https://www.instagram.com/dndwizards/?hl=en"/>Instagram</li>
              <li><link href="https://twitter.com/wizards_dnd"/>Twitter</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer