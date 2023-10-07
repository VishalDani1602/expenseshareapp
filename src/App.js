import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes > 
          <Route path="/login" element={ <Login />}/>
          <Route path="/signup" element={<Signup />}/>
          </Routes > 
      </div>
    </Router>
  );
}

export default App;