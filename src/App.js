import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './js/Login';
import Signup from './js/Signup';
import Header from './js/Header';
import GroupsPage from './js/GroupsPage';
import Home from './js/Home';

function App() {
  
  return (
    
    <Router>
      <div className="App">
      <Header />
        <Routes > 
          <Route path="/login" element={ <Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/groups" element={<GroupsPage />}/>
          </Routes > 
      </div>
    </Router>
  );
}

export default App;