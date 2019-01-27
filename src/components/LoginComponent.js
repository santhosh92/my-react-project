import React, {Component} from 'react';
// import '../../public/login.css';

export default class LoginComponent extends Component {
	render () {
		return (
            <div className="login">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Admin Login</h2>
                                <p>Please enter your email and password</p>
                            </div>
                            <form id="Login">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}