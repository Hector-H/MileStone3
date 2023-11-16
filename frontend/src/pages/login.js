import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/Login.css';
import board1 from '../assets/images/board1.jpg'
import supabase from '../config/supabaseClient';
import Account from '../components/Account';
import Auth from '../components/Auth';
import { useEffect, useState } from 'react';


export default function Login() {
    const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    console.log(supabase.auth.session())
  }, [])

    return (
        <div className="login-page">
            <div className="login-title">
                <h1>Welcome Back!</h1>
            </div>
            <div className="login-container">
                <img src={board1} alt="Blue mood board"/>
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
                    <div>
        {!session ? <Auth /> : <Account  session={session} />}
      </div>
                </div>
            </div>
        </div>
    );
}