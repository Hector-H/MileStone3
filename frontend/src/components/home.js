import React, { useState, useEffect } from 'react';
import unsplash from "../api/unsplash";
import Pin from './Pin';
import '../css/MainContainer.css';
import '../css/SearchBar.css';
import supabase from '../config/supabaseClient';

export default function Home() {
  const [photos, setPhotos] = useState([]);

  //   const handleDelete = (id) => {
  //     setProducts(prevProducts => {
  //         return prevProducts.filter(pd => pd.id !== id)
  //     })
  // }
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Storing photos in local storage
    const cachedData = localStorage.getItem('cachedPhotos');

    const fetchPhotos = async () => {
      try {
        let response;

        if (searchQuery) {
          // If there's a search query, fetch photos based on the query
          response = await unsplash.get('/search/photos', {
            params: {
              query: searchQuery,
              per_page: 20,
            },
          });
        } else {
          // If there's no search query, fetch default photos (e.g., nature)
          response = await unsplash.get('/photos', {
            params: {
              query: 'nature',
              per_page: 20,
            },
          });
        }

        // Cache the new data
        localStorage.setItem('cachedPhotos', JSON.stringify(response.data));
        setPhotos(response.data.results || response.data); // Use results for search, fallback to data for default
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
      
  };

    // Fetch photos when the component mounts or when the searchQuery changes
    fetchPhotos();
  }, [searchQuery]);

  return (
    <div className="home">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mainContainer">
        {photos.map(photo => (
          <Pin key={photo.id} imageUrl={photo.urls.small} altText={photo.description} />
        ))}
      </div>
    </div>
  );
}
