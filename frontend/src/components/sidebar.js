import React from 'react';
import { ControlPoint, Favorite, Login, Person, PersonAdd } from '@mui/icons-material';
import pinthis2 from '../assets/images/pinthis2.png';

export default function Sidebar() {
    return(
        <div className="menuContainer">
        <img src={pinthis2} alt="PinThis logo" className="Logo" onClick={() => window.location.href = ('/')}/>
          <div className="Navbar">
            <div>
              <div className="iconContainer">
                <ControlPoint />
                <span>Add Post</span>
              </div>
              <div className="iconContainer">
                <Favorite />
                <span>Favorites</span>
              </div>
              
              </div>

            <div>
              <div onClick={() => window.location.href = '/login'}  className="iconContainer">
                <Login />
                <span>Login</span>
              </div>
              <div onClick={() => window.location.href = '/signup'} className="iconContainer">
                <PersonAdd />
                <span>Sign Up</span>
              </div>
              <div className="iconContainer">
                <Person />
                <span>Profile</span>
              </div>


              </div>
          </div>
      </div>
    )
}