import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/AddPin.css';

const AddPin = ({ onAddPin, setShowAddPin }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddPin = (e) => {
    e.preventDefault();
    onAddPin({ title, description });
    setTitle('');
    setDescription('');
    setShowAddPin(false);
  };

  return (
<div className="add-pin-page">
  <div className="add-pin-title">
    <h1>New Pin</h1>
  </div>
  <div className="add-pin-container">
    <Form onSubmit={handleAddPin}>
      <Form.Group className="mb-3" controlId="formPinTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPinDescription">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Pin
      </Button>
    </Form>
  </div>
</div>

    );
};

export default AddPin;
