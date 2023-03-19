import React from "react";
import portfolioBackground from "./assets/image/portfolioBackground.jpg";
import ToDoList from "./assets/image/toDoList.png";
import gielda from "./assets/image/gielda.png";

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

        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            margin: "0",
          }}
        >
          <div
            className="overlay2"
            style={{
              height: "250px",
              position: "absolute",
              right: "20%",
              top: "25%",
            }}
          >
            <img src={ToDoList} style={{ height: "250px" }}></img>
          </div>
          <div
            className="overlay3"
            style={{ position: "absolute", left: "20%", top: "25%" }}
          >
            <a href="https://stock-market-famk.vercel.app/">
              <img src={gielda} style={{ height: "250px" }}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
