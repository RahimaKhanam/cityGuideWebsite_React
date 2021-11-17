import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/details" element={<Details/>} />
            <Route path="/facebook" render={() => window.location = "https://www.facebook.com/rahima.khanam.54/"} />
            <Route path="*" exact={true} element={<NotFoundPage/>} />
          </Routes>
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App

