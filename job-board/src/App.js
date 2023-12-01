
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import About from './components/About';
import Contact from './components/Contact';
import './components/styles.css';


const API_KEY = 'Kug/xpqSzBM6ijj5ib6xhiNu1bN+lyozvJIPrPnUpWg=';
const API_URL = 'https://data.usajobs.gov/api/search';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [jobs, setJobs] = useState(null);
  const [searched, setSearched] = useState(false);

  const searchJobs = async (query, selectedOption, selectedLocation) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          Keyword: query,
          WorkSchedule: selectedOption,
          Location: selectedLocation,
        },
        headers: {
          'Authorization-Key': API_KEY,
        },
      });
      setJobs(response.data.SearchResult.SearchResultItems);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="title">Minority Jobs and Careers</h1>
                <SearchBar onSearch={searchJobs} />
                {searched && jobs !== null ? <JobList jobs={jobs} /> : null}
                {searched && jobs === null ? <p>No jobs found.</p> : null}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
