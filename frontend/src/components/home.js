import React, { useState, useEffect } from 'react';
import unsplash from "../api/unsplash"
import Pin from './Pin';
import '../css/MainContainer.css';
import '../css/SearchBar.css';
import supabase from '../config/supabaseClient';


export default function Home() {
    const [photos, setPhotos] = useState([]);
    const [fetchError, setFetchError] = useState(null)
    const [products, setProducts] = useState(null)


    const handleDelete = (id) => {
      setProducts(prevProducts => {
          return prevProducts.filter(pd => pd.id !== id)
      })
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
                .from('products')
                .select()
                  
            if (error) {
                setFetchError('Could not get products')
                setProducts(null)
                console.log(error)
            }
            if (data) {
                setProducts(data)
                setFetchError(null)
            }
    } 
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
    fetchProducts()
  }, []);
  


  return (
  
    <div className="home">
      {fetchError && (<p>{fetchError}</p>)}
        <div className="searchBar">
          <input type="text" placeholder="Search"/>

        </div>
        <div className="mainContainer">
          {photos.map(photo => (
            <Pin key={photo.id} imageUrl={photo.urls.small} altText={photo.description} onDelete={handleDelete} />
          ))}
        
        {fetchError && (<p>{fetchError}</p>)}
          {products && (
            <div className='added products'>
              {products.map(product => (
                <p>{product.photo}</p>
              ))} </div>
          )}
        
      </div>
        </div>
        
        
  )
              }
