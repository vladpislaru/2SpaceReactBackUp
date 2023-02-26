import React, {useState, useEffect} from "react";
import Navbar  from "../Components/Nav";
import logoImg from "../static/images/logos/logo.png"
import launchImg from "../static/images/form23/img0.jpeg"
import "../static/css/form230.css"
import img0 from "../static/images/form23/img0.jpeg"
import img1 from "../static/images/form23/img1.jpeg"
import img2 from "../static/images/form23/img2.jpeg"

//import '../App.css';


const Form230Page = () => {
    const images =[img0, img1,img2];
    const basePath = "/form23/"
    const array = [0,1,2]
    const [index, setIndex] = useState(0);
    const [transition,setTransition] = useState(false);

    useEffect(() =>{
        setTransition(true);
        const timeout = setTimeout(() => {
            setTransition(false);
        }, 600)
    } ,[index])
    
    return (
        <>
            <div className="container-center">
                <div className="col">
                    <div className="presentation-container">
                        <img src ={images[index]} alt="Eva launch" className="presentation-image"/>
                        <div className="presentation-overlay " id ={transition ? "teporary-opac" : ""} >Muncim neincetat</div>
                    </div>
                </div>
                <div className="col-dots">
                    {array.map((item) => {
                        return (
                            <div key={item} className={"dot "}  id = { (item == index ? "active" : "")} onClick={() => setIndex(item)}></div>
                        )
                    })}
                    {/* <div className="dot"></div>
                    <div className="dot"></div> */}
                </div> 
                <div className="col" id="content">
                    <div className="presentation-carousel-points">
                        <span className="content-header">2023 - Formularul 230</span>
                        <h3 id="form230-title">Orice suport conteaza</h3>
                        <p id="form230-content">Redirectioneaza <span id="underline-purple">3,5%</span> din impozitul pe venit!</p>
                        <p id="form230-content">Ne poti ajuta completand <span id="underline-purple">formularul 230</span> pana pe data de 23 martie.</p>
                        <button className="btn-form23">Redirectioneaza</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form230Page;