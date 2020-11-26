import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    
      <Router>
        <Navbar />
        <Home />
        
      </Router>
    
  );
}

export default App;
