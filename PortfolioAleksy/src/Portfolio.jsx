import React from "react";
import portfolioBackground from "./assets/image/portfolioBackground.jpg";
import ToDoList from "./assets/image/toDoList.png";
import gielda from "./assets/image/gielda.png";
import Barber from "./assets/image/barber.png";
import "./App.css";

export default function Portfolio() {
  return (
    <div style={{ width: "100%", marginTop: "30px", marginBottom: "40px" }}>
      <div style={{ width: "100%", position: "relative", margin: "0" }}>
        <img
          src={portfolioBackground}
          alt=""
          style={{ width: "100%", margin: "0" }}
        />
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="overlay"
        >
          <div className="header">PORTFOLIO</div>
        </div>

        <div className="overlaycontainer">
          <div className="overlay2">
            <a href="https://barber-shop-zeta-beryl.vercel.app/">
              <img src={Barber} className="barberimage"></img>
              <div
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                }}
              >
                BarberShop website
              </div>
            </a>
          </div>
          <div className="overlay3">
            <a href="https://stock-market-famk.vercel.app/">
              <img src={gielda} className="gieldaimage"></img>
              <div
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                }}
              >
                Project I am the most proud of
              </div>
            </a>
          </div>
          <a href="https://github.com/psychologianauki">
            <div className="secondcontainer">
              Click here and check out the projects in which I participated
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
