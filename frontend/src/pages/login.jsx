import React from 'react';
import { Button, Form } from 'react-bootstrap';
import pinthis2 from '../assets/images/pinthis2.png';
import '../css/Login.css';
//import board1 from '../assets/images/board1.jpg'

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-title">
                <h1>Welcome Back!</h1>
            </div>
            <div className="login-container">
                <img className="login-logo" src={pinthis2} alt="PinThis Logo" onClick={() => window.location.href = '/'}/>

                <div className="login-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address: </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}