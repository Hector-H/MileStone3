import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PinThislogo from './images/PinThis-logo.jpeg';
import '../css/Signup.css';
import PinThislogo from '../assets/images/pinthis2.png';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setProfilePicture] = useState(null);
//  const [profilePicture] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleProfilePictureChange = (e) => setProfilePicture(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-page">
      <div className="signup-title">
        <h1>Create an Account</h1>
      </div>
      <div className="signup-container">
        <div className="signup-form">
          <img className="signup-logo" src={PinThislogo} alt="PinThis Logo" onClick={() => window.location.href = '/'} />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleProfilePictureChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
