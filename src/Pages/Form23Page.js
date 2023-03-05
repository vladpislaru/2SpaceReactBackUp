import React from "react";
import Form230Page from "./Form230Page";
import logoImg from "../static/images/logos/logo.png"
import Navbar from '../Components/Nav';

const Form23Page = () => {
    return (
        <div className="App">
            <Navbar/>
            <header className="App-header">
                <img className="title-logo" src={logoImg}  alt=""/>
                <Form230Page/>
            </header>
        </div>
    )
}

export default Form23Page;