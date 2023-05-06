import React, { useState, useEffect } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import "../static/css/AboutUS.css";
import Main from "../static/images/backgrounds/vodafone.JPG";
import logoImg from "../static/images/logos/logo.png"

const AboutUs = (props) => {
 
  return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <div className='overlay-header-bg'></div>
          <img className="title-logo" src={logoImg}  alt=""/>

        </header>
        
        <section className='About'>
          
        </section>

        <Footer/>
    </div>
  )
}
    
    
    export default AboutUs;
    