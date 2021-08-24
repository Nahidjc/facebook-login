import React from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import './login.css';
const LoginForm = (props) => {
    return (
        <div className="container">
            {/* <Form className="mt-5">
                <FormGroup>

                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                {' '}
                <FormGroup>

                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                {' '}
                <div className="d-grid gap-2">
                    <Button className="btn-primary" variant="primary" size="lg">
                        Login
                    </Button>

                </div>

            </Form> */}

            {/* New Login page */}
            {/* <Container>

            </Container> */}

            <div className="loginsignup">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="content-left">
                            <h1>facebook</h1>
                            <h2>Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                        <div className="content-right">
                            <Form >
                                {/* <div className="form-group">
                                    <input type="text" placeholder="Email address or phone number" />
                                </div> */}
                                <FormGroup>

                                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                </FormGroup>
                                {' '}
                                {/* <div className="form-group">
                                    <Input type="password" placeholder="Password" />
                                </div> */}
                                <FormGroup>

                                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                </FormGroup>
                                {' '}
                                <div className="login">
                                    <a href="#" className="btn">log in</a>
                                </div>
                                <div className="forgot">
                                    <a href="#">Forgotten account?</a>
                                </div>
                                <div className="create-btn">
                                    <a href="#" className="btn">create new account</a>
                                </div>
                            </Form>
                            <p><a href="#">Create a Page</a> for a celebrity, band or business.</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    );
}

export default LoginForm;