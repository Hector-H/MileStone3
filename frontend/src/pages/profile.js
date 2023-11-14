import React, { useState } from 'react';
import '../css/Profile.css';

export default function Profile() {
  const [pins, setPins] = useState([
    { id: 1, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, imageUrl: 'https://via.placeholder.com/150' },
  ]);

  const handleDelete = (id) => {
    setPins((prevPins) => prevPins.filter((pin) => pin.id !== id));
  };

  const handleEdit = (id) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => handleImageChange(e, id);
    input.click();
  };

  const handleImageChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPins((prevPins) =>
        prevPins.map((pin) =>
          pin.id === id ? { ...pin, imageUrl } : pin
        )
      );
    }
  };

  const email = 'Johndoe@example.com';

  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile Picture" />
        </div>
        <div className="user-info">
          <h1>John Doe</h1>
          <p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
      </div>
      <div className="profile-pins">
        <h2>My Pins</h2>
        {pins.map((pin) => (
          <div className="pins" key={pin.id}>
            <img src={pin.imageUrl} alt={`Pin ${pin.id}`} />
            <div className="edit-delete">
              <button className="edit" onClick={() => handleEdit(pin.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(pin.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

