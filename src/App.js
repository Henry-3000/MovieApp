import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import './App.css';
import { LandingPage } from './landing page';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/movies/:id" element={<MovieDetails/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
