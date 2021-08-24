import React from 'react';
//import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import './login.css';
const LoginForm = (props) => {
    return (

        <div className="container mt-5">
            <div className="m-auto row justify-content-between">
                <div className="content-h1 col-md-6">
                    <h1>facebook</h1>
                    <h2>Facebook helps you connect and share with the people in your life.</h2>
                </div>

                <div className="m-auto content-right col-md-6">
                    <form className="m-auto ">
                        <div className="form-group">
                            <input type="text" placeholder="Email address or phone number" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="password" />
                        </div>

                        <div className="login">
                            <a href="#" className="text-white btnb">log in</a>
                        </div>
                        <div className="forget">
                            <a href="#">Forgotten account?</a>
                        </div>
                        <div className="line"></div>
                        <div className="create-btn">
                            <a href="#" className="btnb">create new account</a>
                        </div>

                    </form>
                    <p className="bottom-text"><a href="#">Create a page</a> for a celebrity, band or business.</p>
                </div>
            </div>
        </div>

    );
}

export default LoginForm;