import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Aleksy from "./assets/image/Aleksyp.png";
import { Link, Element } from "react-scroll";
import Skills from "./Skills";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";
import Contactme from "./Contactme";

function App() {
  return (
    <div className="App">
      <div>
        <div
          className="navbar"
          style={{
            width: "100%",
            height: "60px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <nav>
            <ul>
              <li>
                <Link to="section1" smooth={true} duration={1000}>
                  About me
                </Link>
              </li>
              <li>
                <Link to="section2" smooth={true} duration={1000}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="section3" smooth={true} duration={1000}>
                  Portfolio
                </Link>
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "100%",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <Link to="section4" smooth={true} duration={1000}>
                  Contact me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="presentation"
          style={{ width: "100%", display: "flex" }}
        >
          <div className="mepart" style={{ color: "black", width: "50%" }}>
            <h2>Hi, I am</h2>
            <br></br>
            <h1>Aleksy Lisowski</h1>

            <h4>Front-end Developer</h4>
          </div>
          <div className="imagepart">
            <img src={Aleksy} style={{ width: "300px", height: "300px" }}></img>
          </div>
        </div>
        <div className="aboutmepart"></div>

        <Element name="section1" className="element">
          <Aboutme />
        </Element>
        <Element name="section2" className="element">
          <Skills />
        </Element>
        <Element name="section3" className="element">
          <Portfolio />
        </Element>
        <Element name="section4" className="element">
          <Contactme />
        </Element>
      </div>
    </div>
  );
}

export default App;
