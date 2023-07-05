import React, { useState, useEffect } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import "../static/css/AboutUS.css";
import "../static/css/qube2space.css"
import Main from "../static/images/backgrounds/vodafone.JPG";
import logoImg from "../static/images/logos/logo.png"
import Modal from 'react-bootstrap/Modal';
import pdf from '../static/docs/rulebook.pdf';
import { FaWindowClose } from "react-icons/fa";



const Qube2Space = (props) => {
   


    return (
      <div className="App">
        <Navbar/>
        <header className="App-header qube2SpaceMain ">
            <div className='overlay-header-bg'></div>
            <img className="title-logo" src={logoImg}  alt=""/>
            <div className="w-25 d-flex" id="q2s-title">
                <h1 id="blend-mode-title">QUBE2SPACE</h1>
            </div>
            <div className="w-25 d-flex" id="q2s-title">
                <h2 id="blend-mode-title">2023 edition is here!</h2>
            </div>
            <div className=" mt-5 d-flex flex-row " id="buttons-row">

                <div className="bt-rules  d-flex justify-content-around align-items-center ">
                    <a href={pdf} target="_blank" rel="noreferrer" id="qube2sapce">

                        <div className="btn btn4">
                            <h3>
                                    Rulebook
                            </h3>
                        </div>
                    </a>

                </div>
                

                <div className="bt-rules d-flex justify-content-around align-items-center ">
                    <a href={"https://tally.so/r/nGKXqz"} target="_blank" rel="noreferrer" id="qube2sapce">
                        <div className="btn btn4 ">
                            <h3>
                                    Register
                            </h3>
                        </div>
                    </a>

                </div>
                

            </div>
              
        </header>
        <Footer/>
    </div>
  )
}
    
    
    export default Qube2Space;