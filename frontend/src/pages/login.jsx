import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PinThislogo from './images/PinThis-logo.jpeg';

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-title">
                <h1>Welcome Back!</h1>
            </div>
            <div className="login-container">
            <div className="login-form">
            <img className="login-logo" src={PinThislogo} alt="PinThis Logo" onClick={() => window.location.href = '/'}/>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
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