import React, { useState } from 'react';
import NewsList from '../components/NewsList';
import 'remixicon/fonts/remixicon.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('general');


  const handleSearch = () => {
    setCategory(searchTerm.trim() || 'general');
    setSearchTerm("");
  };

  return (
    <div className="home">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <i
          className="ri-search-line search-icon"
          onClick={handleSearch}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>

      <NewsList category={category} />
    </div>
  );
};

export default Home;
