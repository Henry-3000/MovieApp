import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { LandingPage } from './landing page';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/movies/:id" element={<MovieDetails/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;