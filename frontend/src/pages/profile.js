import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import supabase from '../config/supabaseClient';
import ProfilePin from '../components/ProfilePins';
import { Link } from 'react-router-dom';

export default function Profile () {
  const [pins, setPins] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const handleDelete = (id) => {
    setPins(prevPins => {
      return prevPins.filter(pm => pm.id !== id)
    })
  };

  // const handleEdit = (id) => {
  //   const input = document.createElement('input');
  //   input.type = 'file';
  //   input.accept = 'image/*';
  //   input.onchange = (e) => handleImageChange(e, id);
  //   input.click();
  // };

  const handleImageChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPins((prevPins) =>
        prevPins.map((pin) => (pin.id === id ? { ...pin, imageUrl } : pin))
      );
    }
  };

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const { data, error } = await supabase.from('pins').select();

        if (error) {
          setFetchError('Could not fetch pins');
          setPins(null);
          console.error(error);
        }

        if (data) {
          setPins(data);
          setFetchError(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPins();
  }, []);

  const email = 'Johndoe@example.com';

  return (
    <div className="profile-container">
      <div className="profile-title">
        <h1>My Profile</h1>
      </div>

      <div className="profile-pins">
        <div className="pins-title">
          <h2>My Pins</h2>
        </div>

        {fetchError ? (
          <p>Error: {fetchError}</p>
        ) : (
          <div>
            {pins &&
              pins.map((pin) => (
                <div className="pins" key={pin.id}>
                  <ProfilePin key={pin.id} pin={pin} onDelete={handleDelete}/>
                  {/* <div className="edit-delete">
                  <Link to={'/profile/' + pin.id }>
                  <button className="edit">
                      Edit
                    </button>
                  </Link>
                    
                    <button className="delete" onClick={handleDelete}>
                      Delete
                    </button>
                  </div> */}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
