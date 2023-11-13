import React, { useState } from 'react';

const PinForm = ({ onAddPin, setShowPinForm }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddPin = (e) => {
    e.preventDefault();
    // Call the onAddPin function with the pin data
    onAddPin({ title, description });
    // Reset form fields
    setTitle('');
    setDescription('');
    // Hiding the form
    setShowPinForm(false);
  };

  return (
    <form onSubmit={handleAddPin}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Pin</button>
    </form>
  );
};

export default PinForm;
