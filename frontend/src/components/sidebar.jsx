import React from 'react';
import '../App.css';
import PinThisLogo from './images/PinThis-logo.jpeg';
import Defaultuser from './images/defaultuser.jpg';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="main-logo">
                <img className="sidebar-img"src={PinThisLogo} alt="PinThis Logo" />
            </div>
            <div className="sidebar-nav">
                <button href="#">Make a Post</button>
                <button href="#">Favorite Posts</button>
            </div>
            <div className="sidebar-footer">
            <div className="sidebar-login">
                <button href="#">Login</button>
                <button href="#">Sign Up</button>
            </div>
            <div className="sidebar-profile">
                <img className="sidebar-profile-pic" src={Defaultuser} alt="Profile Picture" /> 
            </div>
            </div>
        </div>
    )
}