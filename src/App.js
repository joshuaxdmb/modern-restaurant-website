import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './container/AboutUs';
import Menu from './components/Menu/Menu';
import Chef from './container/Chef';
import Intro from './container/Intro';
import Laurels from './container/Laurels';
import Gallery from './container/Gallery';
import FindUs from './container/FindUs';
import Footer from './components/Footer/Footer';



const App = ()=> {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Menu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
