import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import DetailPage from './components/DetailPage/DetailPage';
import Home from './components/Home/Home';

const App = () => {
  const [routeID, setRouteID] = useState('')
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/:id`} element={<DetailPage routeID={routeID} setRouteID={setRouteID} />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App