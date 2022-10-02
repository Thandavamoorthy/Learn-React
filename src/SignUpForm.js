import React from "react";


class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {username: "",
                      pno: null,
                      errmsg: ""};
    }
    uservalue = (event) => {
        let n = event.target.name;
        let v = event.target.value;
        let err = "";
        if (n === "pno") {
            if (v!== "" && !Number(v)) {
                err = <strong className="text-muted">Invalid value, Enter the number</strong>
            }
        }
        this.setState({ errmsg: err });
        this.setState({ [n]: v });
    }
    render() {
        return (
            <div className="container border mt-5 rounded ">
                <form className="was-validated">
                    <div className="form-group">
                        <h1 className="text-center text-primary mt-3">Welcome {this.state.username}</h1>
                        <label htmlFor="uname" className="form-label">Username</label>
                        <input type="text" className="form-control mb-2" onChange={this.uservalue} id="uname" placeholder="Enter username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pno" className="form-label">Phone number</label>
                        <input type="text" className="form-control mb-2" onChange={this.uservalue} id="pno" placeholder="Enter phone number" name="pno" required />{this.state.errmsg}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control mb-2" id="password" placeholder="Enter username" required />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox" required />
                        <label htmlFor="checkbox" className="form-check-label mb-2">I agree the Terms and Conditions.</label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;