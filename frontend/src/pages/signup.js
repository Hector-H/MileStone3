import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import board2 from '../assets/images/board2.jpg'
import '../css/Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleProfilePictureChange = (e) => setProfilePicture(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-page">
      <div className="signup-title">
        <h1>Create An Account</h1>
      </div>
      <div className="signup-container">
        <img src={board2} alt='Blue mood board'/>
        <div className="signup-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address: </Form.Label>
              <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPicture">
              <Form.Label>Profile Picture: </Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleProfilePictureChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
