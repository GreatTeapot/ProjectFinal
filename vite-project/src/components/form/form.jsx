import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
