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
import evaLaunch from './static/images/components/eva_border.gif'
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

      </header>
      
      <section className='About'>
        <div className='row d-flex justify-content-center align-items-center'>
          <HomeAboutPhoto/>
          <div className='col-6'>
            <p>Descriere pompoasa</p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}


const HomeAboutPhoto = () => {
  return (
    <div className='col-6 mt-5 floating-left'>
      <img src={evaLaunch}/>

    </div>
  )
}
export default App;
