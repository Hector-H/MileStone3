import React from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";


function ProfilePin({ pin, onDelete }) {
    if (!pin) {
        console.log('Pin is undefined:', pin);
        return null; // or a default component or message
    }

    const handleDelete = async () => {
        const { data, error } = await supabase
        .from('pins')
        .delete()
        .eq('id', pin.id)
    
        if(error) {
          console.log(error)
        }
        if(data) {
          console.log(data)
          onDelete(pin.id)
        }
      };

    return (
        <div className="pin">
            <h3>{pin.title || 'Default Title'}</h3>
            <p>{pin.description}</p>
            <img src={pin.photo} alt={pin.title || 'Pin Image'} />
            <div className="edit-delete">
                  <Link to={'/profile/' + pin.id }>
                  <button className="edit">
                      Edit
                    </button>
                  </Link>
                    
                    <button className="delete" onClick={handleDelete}>
                      Delete
                    </button>
                    </div>
        </div>
    );
}

export default ProfilePin;