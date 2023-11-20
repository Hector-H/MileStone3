import React from "react";


function Pin({ imageUrl, altText }) {
    return (
        <div className="pin">
            <img src={imageUrl} alt={altText} />
        </div>
    );
}

export default Pin;
