import React from "react";
import portfolioBackground from "./assets/image/portfolioBackground.jpg";
import ToDoList from "./assets/image/toDoList.png";
import gielda from "./assets/image/gielda.png";

export default function Portfolio() {
  return (
    <div style={{ width: "100%", marginTop: "30px", marginBottom: "40px" }}>
      <div style={{ width: "100%", position: "relative" }}>
        <img src={portfolioBackground} alt="" style={{ width: "100%" }} />
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
          }}
        >
          <div className="overlay2" style={{ height: "100px" }}>
            <img src={ToDoList} style={{ height: "200px" }}></img>
          </div>
          <div className="overlay2">
            {" "}
            <img src={gielda} style={{ height: "200px", left: "100px" }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
