import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Slider from './components/Slider/Slider';
import Home from './pages/Home';

// const slides = [
//   {
//     city: 'Paris',
//     country: 'France',
//     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
//   },
//   {
//     city: 'Singapore',
//     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
//   },
//   {
//     city: 'Prague',
//     country: 'Czech Republic',
//     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
//   },
//   {
//     city: 'Amsterdam',
//     country: 'Netherlands',
//     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
//   },
//   {
//     city: 'Moscow',
//     country: 'Russia',
//     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
//   },
// ];

function App() {
  return (
    
      <Router>
        <Navbar />
        <Home />
        
      </Router>
    
  );
}

export default App;
