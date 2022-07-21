import React from 'react';
import './App.css';
import { 
  Switch,
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App;
