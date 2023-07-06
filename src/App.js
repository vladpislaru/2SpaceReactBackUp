import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import logoImg from "./static/images/logos/logo.png"
import { useState } from 'react';
import imgCornerLeft from './static/images/components/output-onlinegiftools.gif'
import evaLaunch from './static/images/components/lansare_smardan.png'
import ACS_logo from './static/images/Sponsors/acs_logo.png'
import AeroSpaceJobs_logo from './static/images/Sponsors/AerospaceJobs.png'
import CAMPUS_logo from './static/images/Sponsors/campus_logo_hires.png'
import ASFIA_logo from './static/images/Sponsors/ASFIA.png'
import FIA_logo from './static/images/Sponsors/FIA_logo_hires.png'
import UPBDRIVE_logo from './static/images/Sponsors/UPBDrive.png'
import VODAFONE_logo from './static/images/Sponsors/vodafone_logo_hires.png'
import PRAGMATIC_logo from './static/images/Sponsors/logo-pragmatic-play.png'
import UPB_logo from './static/images/Sponsors/LOGO_UPB_205_3.3_ro.png'
import satelit from './static/images/components/satelit.png'
import project_eva from './static/images/components/prtoject_eva.png'
import Sponsor from './Components/Sponsor.js'
import LogoFatii from './static/images/Sponsors/logoFatii.png'
import LogoDorini from './static/images/Sponsors/LogoDorini.png'
import LogoETTI from './static/images/Sponsors/LogoETTI.png'
import LogoINCAS from './static/images/Sponsors/LogoINCAS.png'
import ROSPIN_logo from './static/images/Sponsors/ROSPIN.png'

const App = () =>  {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div className='overlay-header-bg'></div>
        <img className="title-logo" src={logoImg}  alt=""/>
        {/* <img className="title-logo" src={UPB_logo}  alt="" id="logo-upb"/> */}
        <img id="bg-corner-left" src={imgCornerLeft}/>
        <img id="bg-corner-rigth" src={imgCornerLeft}/>
        <div className='bg-white' id="bg-white"></div>
      </header>
      
      <div className='About w-100 d-flex flex-column mt-5'>
        <section className='w-100 d-flex flex-column justify-content-center align-items-center bg-transparent'>
          <div className='mt-5 mb-0 d-flex justify-content-center align-items-center w-100 about-row'>
            <h1 className='h1-section-title h1_low_res'>About Us</h1>
          </div>
          <p id="small_h1_underline" className='p-0'>
            - - - 
          </p>
          <div id="About-content" className='w-75 d-flex flex-row justify-content-around mt-5'>
            {/* <div className='dotted-vertically-carousel'>
              <div className='check-point'>

              </div>
              <div className='check-point-tail'>

              </div>
              <div className='check-point'>

              </div>
              <div className='check-point-tail'>

              </div>
              <div className='check-point'>

              </div>
              <div className='check-point-tail'>

              </div>
              <div className='check-point'>

              </div>
              <div className='check-point-tail'>

              </div>
               <div className='check-point'>

              </div>
              <div className='check-point-tail'>

              </div>
              <div className='check-point'>

              </div>
            </div> */}
            <div id="About-Images" className='col-4' >
              <img src={evaLaunch} className="about_images"></img>
            </div>
            <div id="About-Text" className='col-7 d-flex flex-column justify-content-center align-items-center bg-transparent' >
              <div className='title-with-icon'>
                <h3 className='mb-4 h3_low_res'>
                  Hard working NGO 
                </h3>
                <p>
                  Students 2Space is an NGO, established in 2021, dedicated to
                  promoting the space industry among students, through a hands-on
                  approach.{" "}
                </p>
                <p>
                  Specifically, this initiative supports volunteers in
                  building and launching various rocket models. 

                  STUDENTS2SPACE main activity takes place 
                  inside the Research Center CAMPUS within 
                  University POLITEHNICA of Bucharest, 
                  Romania.
                </p>
                <h3 className="mb-4 h3_low_res">Our goals</h3>
                <p>To reach 9000m with our own fully developed rocket</p>
                <p>
                  To design and build our own UAV for atmospheric altitude testing
                </p>
              </div>
              
            </div>
          </div>
        </section>
        
        <section  className=' w-100 d-flex flex-column justify-content-center align-items-center bg-transparent mt-5' id="SponsorsSection">
          <div className='mt-5 d-flex justify-content-center align-items-center w-100 about-row'>
            <h1 className='h1-section-title h1_low_res'>Partners</h1>
          </div>
          <p id="small_h1_underline" className='p-0'>
            - - - 
          </p>
          
          <div className=' d-flex justify-content-around align-items-center flex-row about-row ' id="sponsor-row-1">
            <Sponsor name="UPB" image={UPB_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania."></Sponsor>

          </div>

          <div className=' d-flex justify-content-around align-items-center flex-row about-row ' id="sponsor-row-1">
            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="ETTI" image={LogoETTI} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania."></Sponsor>
              <Sponsor name="CAMPUS" image={CAMPUS_logo} description="Research Institute „CAMPUS” is UPB's advanced research and development center for multi - and inter - disciplinary technologies."></Sponsor>
            </div>
            
            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="FIA" image={FIA_logo} description="The Faculty of Aerospace Engineering (FAE) Mission is defined in the UPB Charter and is that of advanced research and education."></Sponsor>
              <Sponsor name="ACS" image={ACS_logo} description="The Faculty of Automatic Control and Computers prepares engineers specialized in the fields of Systems Engineering and Computers and Information Technology."></Sponsor>
            </div>

           
          </div>

        </section>

        <section  className=' w-100 d-flex flex-column justify-content-center align-items-center bg-transparent mt-5' id="SponsorsSection">
          <div className='mt-5 d-flex justify-content-center align-items-center w-100 about-row'>
            <h1 className='h1-section-title h1_low_res'>Sponsors</h1>
          </div>
          <p id="small_h1_underline" className='p-0'>
            - - - 
          </p>
          
          <div className=' d-flex justify-content-around align-items-center flex-row about-row ' id="sponsor-row-1">
            <Sponsor name="UPB" image={UPB_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania."></Sponsor>

          </div>


          <div className='  d-flex justify-content-around align-items-center flex-row  about-row ' id="sponsor-row-1">

            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="PragmaticPlay" image={PRAGMATIC_logo} description="Pragmatic Play is a leading game developer providing player-favourites to the most successful global brands in the iGaming industry."></Sponsor>

              <Sponsor name="VODAFONE" image={VODAFONE_logo} description="Vodafone Romania started business in 1997 and continues to deliver the best communication services."></Sponsor>
            </div>

            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="FATII" image={LogoFatii} description="The FATII-ARTRI training center makes available to its students the exam simulation program for obtaining professional certificates and attestations."></Sponsor>
              
              <Sponsor name="DORINI" image={LogoDorini} description="The services of the Dorini company include road transport, partnerships with travel agencies and the provision of transport for employees to and from the workplace."></Sponsor>
            </div>
            
          </div>

        </section>

        <section  className=' w-100 d-flex flex-column justify-content-center align-items-center bg-transparent mt-5' id="SponsorsSection">
          <div className='mt-5 d-flex justify-content-center align-items-center w-100 about-row'>
            <h1 className='h1-section-title h1_low_res'>Contributors</h1>
          </div>
          <p id="small_h1_underline" className='p-0'>
            - - - 
          </p>
          
          <div className=' d-flex justify-content-around align-items-center flex-row about-row ' id="sponsor-row-1">
            <Sponsor name="INCAS" image={LogoINCAS} description="National Institute for Aerospace Research “Elie Carafoli” is the leading research establishment in aerospace sciences in Romania."></Sponsor>

          </div>

          <div className='  d-flex justify-content-around align-items-center flex-row  about-row ' id="sponsor-row-1">

            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="UPBDRIVE" image={UPBDRIVE_logo} description="We are UPB Drive, the Formula Student team of the Polytechnic University of Bucharest Since 2018."></Sponsor>
              
              <Sponsor name="AeroSpaceJobs" image={AeroSpaceJobs_logo} description=" AeroSpace Jobs is an organization that consists of a place dedicated to the aerospace field in Romania with the aim of creating jobs."></Sponsor>
            </div>

            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="ASFIA" image={ASFIA_logo} description="It is a student organization within the The Faculty of Aerospace Engineering."></Sponsor>
              
              <Sponsor name="ROSPIN" image={ROSPIN_logo} description="The mission of ROSPIN is to develop the Romanian Space Ecosystem through various activities such as educational programmes."></Sponsor>
            </div>
            
          </div>

          </section>
        
        <section className='w-100 d-flex flex-column mt-5 rounded bg-transparent align-items-center'>
          <div className='bg-transparent w-100 d-flex flex-column align-items-center'>
            <h1 className='h1-section-title h1_low_res mt-5 mb-5'>
              Current Projects
            </h1>
            <p id="small_h1_underline" className='p-0'>
              - - - 
            </p>
            
            <div className='w-100 d-flex justify-content-around align-items-center projects-pane mt-5' id="projects-row">
              <div className='project-pane d-flex flex-column rounded justify-content-center align-items-center'>
                <div className='w-75 project-image-pane'>
                  <img src={project_eva} className='w-100 rounded'></img>

                  <div className='overlay'>
                    <p className='color-white display-10 m-2 justify-content-center'>
                        Project LUNA represents a new challenge to apply our accumulated knowledge. LUNA is registered in the 30,000ft COTS class and features a supersonic rocket (2.05 Mach) utilizing solid motor propulsion.
                        It was successfully launched on 23 of June in New. Mexico, becoming the first Romanian students team to ever launch on USA soil.
                    </p>
                  </div>

                </div>
                <div className='p-1 w-75 bg-light d-flex flex-column  justify-content-center align-items-center'>
                  <h2 className='color-orange h1_low_res'>
                    Luna Rocket
                  </h2>
                </div>
              </div>
              <div className='project-pane d-flex flex-column rounded justify-content-center align-items-center'>
                <div className='w-75 project-image-pane'>
                  <img src={satelit}  className='w-100 rounded' id="img-projects"></img>

                  <div className='overlay'>
                    <p className='color-white display-10 m-2 justify-content-center'>
                      The first-ever PocketQube satellite prototypes competition in the world was organized by 2SPACE team, together with POLITEHNICA University of Bucharest - UPB, aiming to engage numerous space enthusiasts from high schools. Students, professors and professionals in the national space sector appreciated the initiative and the workshop was a remarkable experience for all participants. 
                    </p>
                  </div>
                
                </div>
                <div className='p-1 w-75 bg-light d-flex flex-column  justify-content-center align-items-center'>
                  <h2 className='color-orange h1_low_res '>
                    Qube2Space
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer/>

        </div>

    </div>
  );
}


const HomeAboutPhoto = (props) => {
  return (
    <div className='col-6 about-row d-flex justify-content-center align-items-center'>
      <img src={props.image ? props.image : evaLaunch } className=' mt-5 mb-5 rounded-circle img_about'/>

    </div>
  )
}
export default App;
