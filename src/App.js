import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import logoImg from "./static/images/logos/logo.png"
import { useState } from 'react';
import Form230Page from './Pages/Form230Page';
const App = () =>  {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img className="title-logo" src={logoImg}  alt=""/>
        <Form230Page/> 
      </header>
      <Footer/>
    </div>
  );
}

export default App;
