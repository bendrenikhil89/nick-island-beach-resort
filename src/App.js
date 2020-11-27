import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact><Home /></Route>
      <Route path="/rooms" exact><Rooms /></Route>
      <Footer />
    </Router>
  );
}

export default App;
