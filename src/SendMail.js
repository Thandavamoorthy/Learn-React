import React from "react";

class SendMail extends React.Component {
    constructor() {
        super();
        this.state = { subject: "", body: "" }
    }

    validateForm = event => {
        var subject = document.getElementById('subject').value;
        var body = document.getElementById('body').value;
        window.location.href = "mailto:thandavamoorthyk02@gmail.com?subject="+subject+"&body="+body;
        event.preventDefault();
        return false;
    }
    render() {
        return (
            <div className="heading">
                <h1 className="text-center">Mail Form</h1>
                <div className="Container" id="mailme">
                    <div className="row">
                        <div className="col sm-8 offset-md-2">
                            <form className="justify-content-center" onSubmit={this.validateForm} target="_blank" method="true">
                                <div className="form-group form-group-lg">
                                    <label className="skills" htmlFor="subject">
                                        <strong>Name</strong>
                                    </label>
                                    <input type="text" id="subject" className="form-control" required />
                                </div>
                                <div className="form-group form-group-lg">
                                    <label className="skills" htmlFor="body">
                                        <strong>Feedback</strong>
                                    </label>
                                    <textarea id="body" className="form-control" rows="5" required />
                                </div>
                                <input type="submit" value="send" id="navigation" className="btn btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SendMail;