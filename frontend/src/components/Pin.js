import React from "react";


function Pin({ pin }) {
    return (
        <div className="pin">
            <h3>{pin.title}</h3>
            <p>{pin.description}</p>
            <img src={pin.photo}/>
        </div>
    );
}

export default Pin;
