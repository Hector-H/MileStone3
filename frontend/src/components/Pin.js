import React from "react";
import { Link } from "react-router-dom";


function Pin({ pin }) {
    return (
        <div className="pin">
            <h3>{pin.title}</h3>
            <p>{pin.description}</p>
            <img src={pin.photo}/>
            <div className="buttons"> 
                <Link to={'/profile' + pin.id }>

                    <i className="material-icons">edit</i>
                </Link>
            </div>
        </div>
    );
}

export default Pin;
