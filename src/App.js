import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import logoImg from "./static/images/logos/logo.png"
import { useState } from 'react';
import Form230Page from './Pages/Form230Page';
import AboutUs from './Pages/AboutUs';
import imgCornerLeft from './static/images/components/output-onlinegiftools.gif'
import evaLaunch from './static/images/components/lansare_smardan.png'
import eveniment from './static/images/form23/img0.jpeg'
import ACS_logo from './static/images/Sponsors/acs_logo.png'
import AeroSpaceJobs_logo from './static/images/Sponsors/AerospaceJobs.png'
import ANSYS_logo from './static/images/Sponsors/ansys-logo-black.png'
import CAMPUS_logo from './static/images/Sponsors/campus_logo_hires.png'
import ASFIA_logo from './static/images/Sponsors/ASFIA.png'
import ACRIDA_logo from './static/images/Sponsors/Ecrida.jpg'
import FIA_logo from './static/images/Sponsors/FIA_logo_hires.png'
import HYVE_logo from './static/images/Sponsors/hyve_logo_hires.png'
import ForgottenChain_logo from './static/images/Sponsors/logo_forgottenchain.png'
import RADAR_logo from './static/images/Sponsors/radar_logo_hires_inline.png'
import ROSPIN_logo from './static/images/Sponsors/ROSPIN.png'
import UPBDRIVE_logo from './static/images/Sponsors/UPBDrive.png'
import VODAFONE_logo from './static/images/Sponsors/vodafone_logo_hires.png'
import PRAGMATIC_logo from './static/images/Sponsors/logo-pragmatic-play.png'
import UPB_logo from './static/images/Sponsors/LOGO_UPB_205_3.3_ro.png'
import satelit from './static/images/components/satelit.png'
import project_eva from './static/images/components/prtoject_eva.png'
import Sponsor from './Components/Sponsor.js'
import qube2space from './static/images/Qube2space/qube2space.png'
import ReactPDF from '@react-pdf/renderer';
import LunaProject from './static/images/AboutUS/LunaProject.jpeg'


const App = () =>  {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div className='overlay-header-bg'></div>
        <img className="title-logo" src={logoImg}  alt=""/>
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
          {/* <div className='mt-5 d-flex justify-content-center align-items-center w-100 about-row'>
            <HomeAboutPhoto/>
            <div className='d-flex justify-content-center align-items-center col-6 '>
              <p className='w-75 text-white about-p '> STUDENTS2SPACE is an NGO that wants to provide 
                  practical contexts for students passionate about 
                  the space industry, especially rockets. 

                  Specifically, this initiative supports volunteers in
                  building and launching various rocket models. 

                  STUDENTS2SPACE main activity takes place 
                  inside the Research Center CAMPUS within 
                  University POLITEHNICA of Bucharest, 
                  Romania.
              </p>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center w-100'>
            <div className='d-flex justify-content-center align-items-center col-6 '>
              <p className='w-75 text-white about-p '> STUDENTS2SPACE is an NGO that wants to provide 
                  practical contexts for students passionate about 
                  the space industry, especially rockets. 

                  Specifically, this initiative supports volunteers in
                  building and launching various rocket models. 

                  STUDENTS2SPACE main activity takes place 
                  inside the Research Center CAMPUS within 
                  University POLITEHNICA of Bucharest, 
                  Romania.
              </p>
            </div>
            <HomeAboutPhoto image={eveniment}/>
            
          </div> */}
        </section>
        
        <section  className=' w-100 d-flex flex-column justify-content-center align-items-center bg-transparent mt-5' id="SponsorsSection">
          <div className='mt-5 d-flex justify-content-center align-items-center w-100 about-row'>
            <h1 className='h1-section-title h1_low_res'>Sponsors & Partners</h1>
          </div>
          <p id="small_h1_underline" className='p-0'>
            - - - 
          </p>
        
          <div className=' d-flex justify-content-around align-items-center flex-row about-row ' id="sponsor-row-1">
            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="ACS" image={ACS_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>

              <Sponsor name="CAMPUS" image={CAMPUS_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>
            </div>
            
            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="VODAFONE" image={VODAFONE_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>

              <Sponsor name="PragmaticPlay" image={PRAGMATIC_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>

            </div>

           
          </div>

          {/* <div className='mt-5 d-flex justify-content-around align-items-center w-50 about-row '>
            <Sponsor name="PragmaticPlay" image={PRAGMATIC_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>

            <Sponsor name="UPB" image={UPB_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>

          </div> */}

          <div className='  d-flex justify-content-around align-items-center flex-row  about-row ' id="sponsor-row-1">

            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="UPB" image={UPB_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>
            
              <Sponsor name="AeroSpaceJobs" image={AeroSpaceJobs_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>
            </div>

            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="ASFIA" image={ASFIA_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>
              
              <Sponsor name="RADAR" image={RADAR_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>
            </div>
            
          </div>

          <div className=' d-flex justify-content-around align-items-center w-50 about-row '>
            

            {/* <Sponsor name="RADAR" image={RADAR_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor> */}
            <div className=' d-flex justify-content-around align-items-center ' id="sponsor-row-2">
              <Sponsor name="FIA" image={FIA_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>

              <Sponsor name="UPBDRIVE" image={UPBDRIVE_logo} description="The University POLITEHNICA of Bucharest is the oldest and most prestigious engineering school in Romania"></Sponsor>
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
