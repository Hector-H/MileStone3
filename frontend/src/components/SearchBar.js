/* import React, { useState } from 'react';
import axios from 'axios';
import '../css/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: searchQuery,
          client_id: process.env.REACT_APP_ACCESS_KEY,
        },
      });

      const photos = response.data.results;

      onSearch(photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
*/