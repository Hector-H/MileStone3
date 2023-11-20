import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/AddPin.css';
import board3 from '../assets/images/board3.jpg';
import supabase from '../config/supabaseClient';
import { useNavigate, useParams } from "react-router-dom"



const UpdatePin = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
  
            if (!title || !description || !photo ) {
                setFormError('Make sure to have all fields completed')
                return
            }
            const { data, error } = await supabase
            .from('pins')
            .update({title, description, photo})
            .eq('id', id)

            if(error) {
                console.log(error)
                setFormError('Please complete fields')
            }
            if(data) {
                setFormError(null)
                navigate('/profile')
            }
    }
    

    useEffect(() => {
        const fetchPin = async () => {
            const { data, error} = await supabase
            .from('pins')
            .select()
            .eq('id', id)
            .single()
        
            if(error) {
                navigate('/profile', { replace: true})
            }
            if(data) {
                setTitle(data.title)
                setDescription(data.description)
                setPhoto(data.photo)
                console.log(data)
            }
        }

        fetchPin()
    }, [id, navigate])


    return (
        <div className="add-pin-page">
        <div className="add-pin-title">
          <h1>Update your Pin</h1>
        </div>
        <div className="add-pin-container">
          <img src={photo} alt="Blue mood board" />
          <div className="add-pin-form">
            <Form onSubmit={handleSubmit}>
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
                <Form.Control type="img" value={photo} onChange={(e) => setPhoto(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Pin
              </Button>
              {formError && <p className='error'>{formError}</p>}
            </Form>
          </div>
        </div>
      </div>
)} 

export default UpdatePin