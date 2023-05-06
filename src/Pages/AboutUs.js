import React, { useState, useEffect } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import "../static/css/AboutUS.css";
import Main from "../static/images/backgrounds/vodafone.JPG";

const AboutUs = (props) => {
 
    return (
      <>
      <Navbar />
        <div className="aboutUsContainer">
            <div className="text-center">
              <img src={Main} className="aboutUsImg" />
            </div>



        </div>
        <Footer />
      </>
    )
    }
    
    
    export default AboutUs;
    