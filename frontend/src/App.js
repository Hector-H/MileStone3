import "./App.css";
import React, { useState, useEffect } from 'react';
import pinthis2 from '../src/assets/images/pinthis2.png'
// import MenuContainer from "./components/MenuContainer";
import { ControlPoint, Favorite, Login, Person, PersonAdd } from '@mui/icons-material';
import Pin from "./components/Pin";
import unsplash from "./api/unsplash"
import PinForm from "./components/PinForm";

function App() {
  const [showPinForm, setShowPinForm] = useState(false);
  const [photos, setPhotos] = useState([]);

  // Reveal pin form
/*    const togglePinForm = () => {
    setShowPinForm(!showPinForm);
  };

  const handleAddPin = (pinData) => {
    console.log("Adding pin:", pinData);
    setShowPinForm(false);
  };
*/

  useEffect(() => {
    // Storing photos in local storage
    const cachedData = localStorage.getItem('cachedPhotos');

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setPhotos(parsedData);
    } else {
      // Grabbing photos from the Unsplash API
      unsplash.get('/photos', {
        params: {
          query: 'nature',
          per_page: 20,
        },
      })
        .then(response => {
          // Cache the new data
          localStorage.setItem('cachedPhotos', JSON.stringify(response.data));
          setPhotos(response.data);
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    }
  }, []);

  return (
    <div className="App">
      <div className="menuContainer">
        <img src={pinthis2} alt="PinThis logo" className="Logo"/>
        <div className="Navbar">
          <div>
            <div className="iconContainer" onClick={togglePinForm}>
              <ControlPoint />
              <span>Add Post</span>
            </div>
            <div className="iconContainer">
              <Favorite />
              <span>Favorites</span>
            </div>
          </div>
          <div>
            <div className="iconContainer">
              <Login />
              <span>Login</span>
            </div>
            <div className="iconContainer">
              <PersonAdd />
              <span>Sign Up</span>
            </div>
            <div className="iconContainer">
              <Person />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="searchBar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="mainContainer">
          {photos.map((photo) => (
            <Pin key={photo.id} imageUrl={photo.urls.small} altText={photo.description} />
          ))}
        </div>
        {showPinForm && <PinForm onAddPin={handleAddPin} setShowPinForm={setShowPinForm} />}
      </main>
    </div>
  );
}

export default App;