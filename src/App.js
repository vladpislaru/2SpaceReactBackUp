import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Nav';
import logoImg from "./static/images/logos/logo.png"
import { useState } from 'react';
import Form230Page from './Pages/Form230Page';
function App() {
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img className="title-logo" src={logoImg}  alt=""/>
        <Form230Page/> 
      </header>
    </div>
  );
}

export default App;
