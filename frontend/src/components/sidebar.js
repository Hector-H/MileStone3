import React from 'react';
import { ControlPoint, Login, Person } from '@mui/icons-material';
import pinthis3 from '../assets/images/pinthis3.png';
import '../css/Sidebar.css'

export default function Sidebar() {
    return(
        <div className="menuContainer">
        <img src={pinthis3} alt="PinThis logo" className="Logo" onClick={() => window.location.href = ('/')}/>
          <div className="Navbar">
            <div>
              <div onClick={() => window.location.href = '/AddPin'} className="iconContainer">
                <ControlPoint />
                <span>Add Post</span>
              </div>
            </div>

            <div>
              <div onClick={() => window.location.href = '/login'}  className="iconContainer">
                <Login />
                <span>Login</span>
              </div>
              <div onClick={() => window.location.href = '/profile'} className="iconContainer">
                <Person />
                <span>Profile</span>
              </div>


              </div>
          </div>
      </div>
    )
}