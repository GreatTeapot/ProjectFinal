import React from "react";

class HeaderOld extends React.Component {
    render() {
        return (
            <header>
                <div className="title">
                    <h1>Нейросеть</h1>
                </div>
                <div className="buttons">
                    <button className="exit">LogOut</button>
                </div>
            </header>
        )
    }
}

export default HeaderOld
