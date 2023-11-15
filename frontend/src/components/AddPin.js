import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/AddPin.css';
import board3 from '../assets/images/board3.jpg';
import { useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient';

const AddPin = ({ onAddPin, setShowAddPin }) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [formError, setFormError] = useState(null)

  const handleAddPin = async (e) => {
    e.preventDefault()
  
    if (!title || !description || !photo ) {
        setFormError('Make sure to have all fields completed')
        return
    }

    const { data, error} = await supabase
    .from('products')
    .insert([{ title, description, photo }])
    .select()

    if (error) {
        console.log(error)
        setFormError('Make sure to have all fields completed')
    }
    if (data) {
        console.log(data)
        setFormError(null)
        navigate("/")
    }
}

  return (
    <div className="add-pin-page">
      <div className="add-pin-title">
        <h1>Add A New Pin</h1>
      </div>
      <div className="add-pin-container">
        <img src={board3} alt="Blue mood board" />
        <div className="add-pin-form">
          <Form onSubmit={handleAddPin}>
            <Form.Group className="mb-3" controlId="formPinTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPinDescription">
              <Form.Label>Description: </Form.Label>
              <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPinPhoto" className="mb-3">
              <Form.Label>Upload Photo: </Form.Label>
              <Form.Control type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Pin
            </Button>
            {formError && <p className="error">{formError}</p>}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddPin;
