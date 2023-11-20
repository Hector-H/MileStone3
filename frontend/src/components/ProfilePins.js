import React from "react";
import { Link } from "react-router-dom";


function ProfilePin({ pin }) {
    if (!pin) {
        console.log('Pin is undefined:', pin);
        return null; // or a default component or message
    }

    return (
        <div className="pin">
            <h3>{pin.title || 'Default Title'}</h3>
            <p>{pin.description}</p>
            <img src={pin.photo} alt={pin.title || 'Pin Image'} />
            <div className="buttons"> 
                <Link to={'/profile/' + pin.id }>

                    <i className="material-icons">edit</i>
                </Link>
            </div>
        </div>
    );
}

export default ProfilePin;