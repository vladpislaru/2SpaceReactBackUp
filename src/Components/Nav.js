import React from "react";
import { useState, useEffect, useRef } from "react";
import "../static/css/navbar.css"
import logoImg from "../static/images/logos/simb-neutru-alb2.png"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo2Space from "./../static/images/logos/logo.png"

const Navbar2sp = (props) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const expand = false;
    return (
        <>
            <Navbar key={expand} id="bg-black" expand={expand} className="navbar">
                <Container fluid className="navbar">
                    <a href="#" ><img className="logo" src={logoImg}  alt=""></img></a>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className="mx-2 hambuger-ligth" />

                    <Navbar.Offcanvas
                   
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <img className="nav-logo ml-3" src={logo2Space}  alt=""/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 text-light">
                            <Nav.Link href="#action1" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Home</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action1" className="mt-3">
                                <div className="btn btn4">
                                    <h3>About</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>QUBE2SPACE</h3>
                                </div>
                            </Nav.Link>
                            {/* <h3 className="" style={{ flex: 1}}>
                                <NavDropdown className="dropdown-center"
                                    title={<div className="btn btn4">
                                                <h3>Project EVA</h3>
                                            </div>}
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    
                                >
                                    <NavDropdown.Item href="#action3">
                                        <div className="btn btn4">
                                            <h3>Project EVA</h3>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        <div className="btn btn4">
                                            <h3>Project EVA</h3>
                                        </div>
                                    </NavDropdown.Item>
                                    
                                </NavDropdown>
                            </h3> */}
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Project EVA</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Project EVA</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Sponsors</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Contact</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Support Us</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Votează conștient</h3>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mt-3">
                                <div className="btn btn4">
                                    <h3>Team members</h3>
                                </div>
                            </Nav.Link>

                            {/* <NavDropdown
                                title="Dropdown"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <NavDropdown.Item href="#action3">Project EVA</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Project LUNA</NavDropdown.Item>
                                <NavDropdown.Divider />
                                
                            </NavDropdown> */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

const NavPages = (props) => {
    return(
        <>
            <nav className="nav-opened">
                <div id="mySidenav" className="sidenav">
                    <ul>
                        <li><a href="index.html#About" onclick="openNav()">About</a></li>
                        <li><a href="qube2space.html" onclick="openNav()">QUBE2SPACE</a></li>
                        <li><a href="3d.html" onclick="openNav()">Project EVA</a></li>
                        <li><a href="index.html#Sponsors" onclick="openNav()">Sponsors</a></li>
                        <li><a href="index.html#Contact" onclick="openNav()">Contact</a></li>
                        <li><a href="sponsors.html" onclick="openNav()">Support Us</a></li>
                        <li><a href="pages/voteazaConstient.html" onclick="openNav()">Votează conștient</a></li>
                        <li><a href="pages/team_members.html" onclick="openNav()">Team members</a></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar2sp;