import React from "react";
import "../static/css/footer.css"

const logo = require('../static/images/logos/logo.png');
const logo_Facebook = require('../static/images/logos/facebook.png');
const logo_Instagram = require('../static/images/logos/instagram.png');
const logo_Linkedin = require('../static/images/logos/linkedin.png');
const logo_Mail = require('../static/images/logos/mail.png');



const Footer = (props) => {
 
return (
  <>
    <section>
      <div className="'footer-container">
  
          <div className="logo-row">
              <img className="logo-footer" src={logo}/>
          </div>
          <div className="pages-row">
              <a href="">HOME</a>
              <a href="">ABOUT US</a>
              <a href="">Support Us</a>
              <a href="">Contact Us</a>
              <a href="">Support Us</a>
          </div>
                 
          <div className="links-row">
              <a href="https://www.facebook.com/Students2Space/" >
                  <img className="social-footer" src={logo_Facebook} />
              </a>
              <a href="https://instagram.com/students2space" >
                  <img className="social-footer" src={logo_Instagram} />
              </a>
              <a href="https://www.linkedin.com/company/students2space" >
                  <img className="social-footer" src={logo_Linkedin} />
              </a>
              <a href="mailto: contact@students.2space.ro" >
                  <img className="social-footer" src={logo_Mail} />
              </a>
          </div>
      </div>
    </section>
  </>
)
}


export default Footer;
