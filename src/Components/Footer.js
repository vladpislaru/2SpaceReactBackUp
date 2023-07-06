import React from "react";
import "../static/css/footer.css"
import {FaFacebook, FaEnvelope, FaInstagram, FaLinkedin, FaRocket} from "react-icons/fa"
import { Link } from "react-router-dom";


const logo = require('../static/images/logos/logo.png');
const logo_Facebook = require('../static/images/logos/facebook.png');
const logo_Instagram = require('../static/images/logos/instagram.png');
const logo_Linkedin = require('../static/images/logos/linkedin.png');
const logo_Mail = require('../static/images/logos/mail.png');



const Footer = (props) => {
 
return (
  <>
    <footer className="footer">
        <div className="container1 ">
            <div className="row d-flex justify-content-around w-100  " >
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4" >
                            <h6>
                                 STUDENTS 2SAPCE
                            </h6>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-4">
                            <ul className="list-unstyled">
                                <li><Link to="/" className="mt-3">Home</Link></li>
                                <li><a href="" data-toggle="tooltip" data-placement="top" title="Soon!">About</a></li>
                                <li><Link to="/team" className="mt-3">Team</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul className="list-unstyled">
                                <li> <Link to="/qube2space" className="mt-3">Qube2Space</Link></li>
                                <li><a href="" data-toggle="tooltip" data-placement="top" title="Soon!">Project Eva</a></li>
                                <li><a href="" data-toggle="tooltip" data-placement="top" title="Soon!">Project Luna</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul className="list-unstyled">
                                <li><Link to="/form230" className="mt-3">Support Us</Link></li>
                                <li><a href="" data-toggle="tooltip" data-placement="top" title="Soon!">Sponsors</a></li>
                                <li><a href="" data-toggle="tooltip" data-placement="top" title="Soon!">Vote Responsibly</a></li>
                            </ul>
                        </div>
                    </div>
                   
                    <br/>
                </div>
                <div className="col-md-3 align-items-center">
                    <h5 className="text-md-right">Contact Us</h5>
                    <hr/>
                    <ul className="nav d-flex justify-content-center ">
                        <li className="nav-item"><a href="" className="nav-link pl-0"><FaFacebook className="social-img-footer" size={"20"} color={"#999"}/></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><FaInstagram className="social-img-footer" size={"20"} color={"#999"}/></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><FaLinkedin className="social-img-footer" size={"20"} color={"#999"}/></a></li>
                        <li className="nav-item"><a href="" className="nav-link"><FaEnvelope className="social-img-footer" size={"20"} color={"#999"}/></a></li>

                    </ul>
                </div>
                
            </div>

            

        </div>
    </footer>
  </>
)
}


export default Footer;
