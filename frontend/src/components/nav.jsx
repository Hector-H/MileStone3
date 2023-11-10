import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function Nav() {
  return (
    <div className="nav">
    <div className="search-bar">
      <input
        style={{
          width: 'calc(100% - 80px)',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          marginRight: '5px'
        }}
        type="text"
        placeholder="🔍 Search"
      />
        <button className="search-button">
            Search 
        </button>
    </div>
  </div>
  );
}

