import React from "react";

class LogOut extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="logOut">Вы действительно хотите выйти?</label>
                    <button type="submit" name="logOut">Yes</button>
                    <button type="submit" name="logOut">No</button>
                </form>
            </div>
        )
    }
}

export default LogOut