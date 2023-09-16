import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import './App.css';
import LandingPage from './landing page';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="/:id" element={<MovieDetails/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
