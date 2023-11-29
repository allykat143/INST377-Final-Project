import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearch = () => {
    onSearch(query, selectedSchedule, selectedLocation);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for jobs..."
      />
      <select
        value={selectedSchedule}
        onChange={(e) => setSelectedSchedule(e.target.value)}
      >
        <option value="">Select Schedule</option>
        <option value="full_time">Full time</option>
        <option value="part_time">Part time</option>
        <option value="internship">Internship</option>
      </select>
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">Select Location</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        <option value="On-Site">On-Site</option>
      </select>
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;


