import React from "react";

class SignUp extends React.Component {
    userAdd = {};

    constructor(props) {
        super(props);
        this.state = {
            nickName: '',
            email: '',
            password: ''
        };
    }

    handleSignUp = (e) => {
        e.preventDefault(); // Prevent default form submission

        this.myForm.reset();

        this.userAdd = {
            nickName: this.state.nickName,
            email: this.state.email,
            password: this.state.password
        };

        // You might want to do something with this.userAdd here
    };

    render() {
        return (
            <div>
                <form
                    action=""
                    ref={(el) => (this.myForm = el)}
                    method="post"
                >
                    <input
                        type="text"
                        placeholder="NickName"
                        onChange={(e) =>
                            this.setState({ nickName: e.target.value })
                        }
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                        required
                    />
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        required
                    />
                    <button type="submit" onClick={this.handleSignUp}>
                        SignUp
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUp;
