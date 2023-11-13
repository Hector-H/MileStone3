import React, { useState, useEffect } from 'react';
import unsplash from "../api/unsplash"
import Pin from './Pin';

export default function Home() {
    const [photos, setPhotos] = useState([]);

  useEffect(() => {
    //Storing photos in local storage
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
  
    <div className="home">

        <div className="searchBar">
          <input type="text" placeholder="Search"/>

        </div>
        <div className="mainContainer">
          {photos.map(photo => (
            <Pin key={photo.id} imageUrl={photo.urls.small} altText={photo.description} />
          ))}

        </div>
        </div>
  )
}