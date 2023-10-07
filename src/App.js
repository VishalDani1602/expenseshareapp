import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes > 
          <Route path="/login" element={ <Login />}/>
          </Routes > 
      </div>
    </Router>
  );
}

export default App;