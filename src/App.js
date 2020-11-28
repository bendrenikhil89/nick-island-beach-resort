import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <div className="app__wrapper">
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/rooms" exact><Rooms /></Route>
        <Route path="*"><PageNotFound /></Route>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
