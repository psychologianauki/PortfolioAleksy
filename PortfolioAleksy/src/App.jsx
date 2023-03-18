import { useState, useEffect } from "react";
import React from "react";
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
import Facebook from "./assets/icons/Facebook";
import Linked from "./assets/icons/Linked.jsx";
import Instagram from "./assets/icons/Instagram";
import Email from "./assets/icons/Email";
import UpArrow from "./assets/icons/UpArrow";
import Github from "./assets/icons/Github";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(top > 100);
  };

  // Attach event listener to window scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle click event
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

            marginTop: "10px",
            borderBottom: "4px solid black",
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
                }}
              >
                <Link to="section4" smooth={true} duration={1000}>
                  Contact me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="part1">
          <div
            className="presentation"
            style={{ width: "100%", display: "flex" }}
          >
            <div className="mepart" style={{ color: "white", width: "50%" }}>
              <h2>Hi, I am</h2>
              <br></br>
              <h1>Aleksy Lisowski</h1>

              <h4>Front-end Developer</h4>
            </div>
            <div className="imagepart">
              <img
                src={Aleksy}
                style={{
                  width: "400px",
                  height: "500px",
                  position: "relative",
                }}
              ></img>
            </div>
          </div>
        </div>
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
      <footer
        style={{
          width: "100%",
          backgroundColor: "black",
          height: "130px",
          marginTop: "20px",
          paddingTop: "10px",
        }}
      >
        {isVisible && (
          <div
            onClick={scrollToTop}
            style={{ color: "white", backgroundColor: "black" }}
          >
            <div>
              <UpArrow />
            </div>
            <div>Back to Top</div>
          </div>
        )}
        <div
          style={{
            gap: "20px",
            paddingTop: "20px",
            paddingBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <a href="https://www.facebook.com/aleksyyyyy/">
              <Facebook />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aleksy-undefined-90b128268/">
              <Linked />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/aleksylisowski/">
              <Instagram />
            </a>
          </div>
          <div>
            <a href="mailto:aleksylisowski@gmail.com">
              <Email />
            </a>
          </div>
          <div>
            <a href="https://github.com/psychologianauki">
              <Github />
            </a>
          </div>
        </div>
        <div style={{ color: "gray", fontSize: "0.6rem" }}>
          Inspirated this figma design
          https://www.figma.com/file/CfVAmzcJQVlKq1men62GTz/Portfolio---Tomasz-Gajda-(Community)?node-id=43-44&t=ojJI788Qz7OdnhoA-0
          <br></br>
          <a href="https://pl.freepik.com/darmowe-zdjecie/gory-vestrahorn-w-stokksnes-na-islandii_11769004.htm#query=krajobraz&position=2&from_view=keyword&track=sph">
            Obraz autorstwa tawatchai07
          </a>{" "}
          na Freepik
        </div>
      </footer>
    </div>
  );
}

export default App;
