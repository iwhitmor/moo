import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
