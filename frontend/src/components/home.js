import React, { useState, useEffect } from 'react';
import unsplash from "../api/unsplash";
import Pin from './Pin';
import SearchBar from './SearchBar';
import '../css/MainContainer.css';
import '../css/SearchBar.css';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('nature');

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
          query,
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
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <div className="mainContainer">
        {photos.map(photo => (
          <Pin key={photo.id} imageUrl={photo.urls.small} altText={photo.description} />
        ))}
      </div>
    </div>
  );
}
