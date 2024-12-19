import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Home'; // Import the HomePage component

function App() {
  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                </Routes>
        </Router>
    )
}
export default App;
    