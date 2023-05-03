import React, { useState, useEffect } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import CatalinChelmus from "../static/images/Poze editate/Chelmus Catalin.jpg";
import "../static/css/team.css";
import waveSeparator from "../static/images/separators/wave.png";
import bgStructure from "../static/images/components/rocket_background_bg.png";
import bgElectronics from "../static/images/components/rocket_electronics_bg.png";
import bgLogistics from "../static/images/components/rocket_logistics_bg.png";
import { RiTeamLine } from "react-icons/ri";
import StefanUrsacheI from "../static/images/Poze editate/Ursache Stefan.jpg";
import ParvuSebastian from "../static/images/Poze editate/Parvu Sebastian-Andrei.jpg"
import TeamMember from "../Components/Images"
import {FaFacebook, FaEnvelope, FaInstagram, FaLinkedin, FaGooglePlus} from "react-icons/fa"

const TeamPage = (props) => {
  return (
    <div className="App scroll-snap" >
      <Navbar />
      <header className="App-header align-items-center" id="section-scroll">
        <div className="row w-75">
          <div className="col-4">
            {/* <div className="card p-0" style={{ width: "18rem" }}>
              <img
                className="card-img-top w-100"
                src={CatalinChelmus}
                alt="Card image cap"
              />
              <div className="">
                <h4 className=" text-ligth mt-4">Cătălin Chelmuș</h4>
                <hr className="w-75 text-ligth m-auto" />
                <h4 className=" text-ligth mt-1" id="team-leader-title">
                  Team Leader
                </h4>
              </div>
            </div> */}
            <MemberCard image={CatalinChelmus} name="Cătălin Chelmuș" role="Team Leader" col="12"/>
          </div>

          <div className="col-8 " id="team-about-us">
            <div className="row d-flex justify-content-center ">
              <h1 className="big-title">About us</h1>
              <p>
                Students 2Space is an NGO, established in 2021, dedicated to
                promoting the space industry among students, through a hands-on
                approach.{" "}
              </p>
              <h1 className="big-title">Our goals</h1>
              <p>To reach 9000m with our own fully developed rocket</p>
              <p>
                To design and build our own UAV for atmospheric altitude testing
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="w-100 row m-auto" id="team-section-separation">
            <div className="col-3 bg-light d-flex justify-content-end p-4">
            <h1>Structure</h1>
            </div>
            <div className="col-9 bg-purple d-flex justify-content-start p-4">
            <h1>Departament</h1>
            </div>
        

      </div> */}
      {/* <hr className="w-100 border border-color-dark border-4" /> */}
      <div className="bg-dark align-items-center" id="section-scroll">
        <div className="bg-dark h-100">
          <div className="col-12 d-flex justify-content-center p-2"></div>
        </div>
      </div>

      {/* <hr className="w-100 m-auto border border-color-dark border-4" /> */}
      {/* ECHIPA DE STRUCTURA */}
      <section className="departments m-0 p-4 row " id="section-scroll">
        {/* <div className="upper-bar d-flex justify-content-center">
          <h1 className="big-title ml-4">STRUTURE</h1>
        </div> */}
        <div className="deparment  col-7 d-flex align-items-center" >
          <div className="row d-flex justify-content-center">
            <h1 className="big-title mb-4">STRUCTURE DEPARMENT</h1>

            <div className="d-flex justify-content-center mt-4">
              <div className="dp-leader mt-4">
                <div class="col-12">
                  <MemberCard image={StefanUrsacheI} name="Stefan Ursache" role="Coordinator" col="12"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mt-0 p-0">
          <img
            src={bgStructure}
            alt="Structure BG"
            className="mr-0 mt-0 shaped-bg"
          />
        </div>
      </section>
      <section className="departments m-0  col-12 p-4 d-flex justify-content-center" id="bg-reverse">
        <div className="row d-flex justify-content-center mt-4 w-75">
          {/* <div className="col-4 ">
            <div className="row">

                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>
                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>

            </div>
          </div> */}
          <div className="col-6">
            <div className="row">

                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>
                <MemberCard image={TeamMember.AndreiIoan} role={"Recovery"} name={"Andrei Ioan"}/>

            </div>
          </div>
          <div className="col-6">
            <div className="row">

                <MemberCard image={TeamMember.RaclariuOctavian} role={"Artwork"} name={"Raclariu Octavian"}/>
                <MemberCard image={TeamMember.IlieCristian} role={"3D Print"} name={"Ilie Cristian"}/>

            </div>
          </div>
        </div>
      </section>
      <section className="departments m-0  col-12 p-4 d-flex justify-content-center" >
        <div className="row d-flex justify-content-center mt-4 w-75">
          {/* <div className="col-4 ">
            <div className="row">

                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>
                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>

            </div>
          </div> */}
          <div className="col-6">
            <div className="row">

                <MemberCard image={TeamMember.NedelcuMatei} role={"Integration"} name={"Nedelcu Matei"}/>
                <MemberCard image={TeamMember.DamianRadu} role={"Payload"} name={"Damian Radu"}/>

            </div>
          </div>
          <div className="col-6">
            <div className="row">

                <MemberCard image={TeamMember.IoanAnne} role={"Innovation"} name={"Ioan Anne"}/>
                <MemberCard image={TeamMember.MinescuRares} role={"Materials"} name={"Minescu Rares"}/>

            </div>
          </div>
        </div>
      </section>
      <section className="departments m-0  col-12 p-4 d-flex justify-content-center" id="bg-reverse">
        <div className="row d-flex justify-content-center mt-4 w-75">
          {/* <div className="col-4 ">
            <div className="row">

                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>
                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>

            </div>
          </div> */}
          <div className="col-6">
            <div className="row">
                <MemberCard image={TeamMember.SfetcuMarian} role={"Safety Range"} name={"Sfetcu Marian"}/>
                <MemberCard image={TeamMember.PapucAndrei} role={"Safety Range"} name={"Papuc Andrei"}/>

            </div>
          </div>

          <div className="col-6">
            <div className="row">
                <MemberCard image={TeamMember.AgriciMihai} role={"Integration"} name={"Agrici Mihai"}/>
                <MemberCard image={TeamMember.VoineaAndrei} role={"Member"} name={"Voinea Andrei"}/>
            </div>
          </div>

        </div>
      </section>
      <section className="departments m-0  col-12 p-4 d-flex justify-content-center" >
        <div className="row d-flex justify-content-center mt-4 w-75">
          
            <div className="col-6">
              <div className="row">
                <MemberCard image={TeamMember.CialacuAlexandru} role={"Member"} name={"Cialacu Alexandru"}/>
                <MemberCard image={TeamMember.CialacuAlexandru} role={"Member"} name={"Cialacu Alexandru"}/>
              </div>
            </div>
            
          
        </div>
      </section>

      <div className="bg-dark align-items-center" id="section-scroll">
        <div className="bg-dark h-100">
          <div className="col-12 d-flex justify-content-center p-2"></div>
        </div>
      </div>
      
      <section className="departments1 m-0 p-4 row " id="section-scroll" >
        {/* <div className="upper-bar d-flex justify-content-center">
          <h1 className="big-title ml-4">STRUTURE</h1>
        </div> */}
        <div className="col-5 mt-0 p-0">
          <img
            src={bgElectronics}
            alt="Structure BG"
            className="mr-0 mt-0 shaped-bg asp_rat_3_2"
          />
        </div>
        <div className="deparment  col-7 d-flex align-items-center" >
          <div className="row d-flex justify-content-center">
            <h1 className="big-title mb-4">ELECTRONICS DEPARMENT</h1>

            <div className="d-flex justify-content-center mt-4">
              <div className="dp-leader mt-4">
                <div class="col-12">
                  <MemberCard image={TeamMember.TapuAlexandru} name="Tapu Alexandru" role="Coordinator" col="12"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section className="departments1 m-0  col-12 p-4 d-flex justify-content-center" id="bg-reverse">
        <div className="row d-flex justify-content-center mt-4 w-75">
          {/* <div className="col-4 ">
            <div className="row">

                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>
                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>

            </div>
          </div> */}
          <div className="col-6">
            <div className="row">

                <MemberCard image={TeamMember.BuzescuAlexandru} role={"Coordinator"} name={"Buzescu Alexandru"}/>
                <MemberCard image={TeamMember.RadoviciMihai} role={"Member"} name={"Radovici Mihai"}/>

            </div>
          </div>
          <div className="col-6">
            <div className="row">

                <MemberCard image={TeamMember.SturzuCosmin} role={"Member"} name={"Sturzu Cosmin"}/>
                <MemberCard image={TeamMember.VacarelLaurentiu} role={"Member"} name={"Vacarel Laurentiu"}/>

            </div>
          </div>
        </div>
      </section>
      <section className="departments1 m-0  col-12 p-4 d-flex justify-content-center" >
        <div className="row d-flex justify-content-center align-items-center mt-4 w-75">
          {/* <div className="col-4 ">
            <div className="row">

                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>
                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>

            </div>
          </div> */}
          <div className="col-6">
            <div className="row d-flex justify-content-center align-items-center">
                <MemberCard image={TeamMember.TomescuAndrei} role={"Member"} name={"Tomescu Andrei"} />
                
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="departments m-0 p-4 row " id="section-scroll">
        {/* <div className="upper-bar d-flex justify-content-center">
          <h1 className="big-title ml-4">STRUTURE</h1>
        </div> */}
        <div className="deparment  col-7 d-flex align-items-center" >
          <div className="row d-flex justify-content-center">
            <h1 className="big-title mb-4">LOGISTICS DEPARMENT</h1>

            <div className="d-flex justify-content-center mt-4">
              <div className="dp-leader mt-4">
                <div class="col-12">
                  <MemberCard image={TeamMember.VasilacheTeo} name="Vasilache Teo" role="Coordinator" col="12"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mt-0 p-0">
          <img
            style={{width:"60%"}}
            src={bgLogistics}
            alt="Structure BG"
            className="mr-0 mt-0 shaped-bg"
          />
        </div>
      </section>
      <section className="departments m-0  col-12 p-4 d-flex justify-content-center" id="bg-reverse">
        <div className="row d-flex justify-content-center mt-4 w-75">
          {/* <div className="col-4 ">
            <div className="row">

                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>
                <MemberCard image={ParvuSebastian} role={"Propultion"} name={"Parvu Sebastian"}/>

            </div>
          </div> */}
          <div className="col-6">
            <div className="row">

                <MemberCard image={TeamMember.GhitaAndreea} role={"Design"} name={"Ghita Andreea"}/>
                <MemberCard image={TeamMember.PislaruVlad} role={"Web"} name={"Pislaru Vlad"}/>

            </div>
          </div>
          <div className="col-6">
            <div className="row">

                <MemberCard image={TeamMember.DobreAdelina} role={"Communication"} name={"Dobre Adelina"}/>
                <MemberCard image={TeamMember.ComarlaRares} role={"Design"} name={"Comarla Rares"}/>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};


const MemberCard = ({image, name, role, col}) => {
  return(
    <div className={"col-" + (col ? col : "6") + " d-flex justify-content-center align-items-center"} id="members-row">
       <div class="col-12 d-flex justify-content-center">
            <div class="our-team d-flex justify-content-center">
                <img src={image} alt=""/>
                <ul class="social">
                    <li><a href="#" class="fab fa-linkedin"><FaFacebook className="w-75"/></a></li>
                    <li><a href="#" class="fab fa-instagram"><FaInstagram className="w-75"/></a></li>
                    <li><a href="#" class="fab fa-linkedin"><FaLinkedin className="w-75"/></a></li>
                </ul>
                <div class="team-content">
                    <h3 class="title">{name}</h3>
                    <span class="post">{role}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

const Deparment = (members, deptImage, depImgRatio, deparmentName) => {
  return(
    <>
      <section className="departments m-0 p-4 row " id="section-scroll">
        <div className="deparment  col-7 d-flex align-items-center" >
          <div className="row d-flex justify-content-center">
            <h1 className="big-title mb-4">STRUCTURE DEPARMENT</h1>

            <div className="d-flex justify-content-center mt-4">
              <div className="dp-leader mt-4">
                <div class="col-10">
                  <MemberCard image={StefanUrsacheI} name="Stefan Ursache" role="Coordinator" col="10"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mt-0 p-0">
          <img
            src={bgStructure}
            alt="Structure BG"
            className="mr-0 mt-0 shaped-bg"
          />
        </div>
      </section>
      {members.foreach(member =>{
        return (<>
        


        </>)
      })}
    </>
  )
}
export default TeamPage;
