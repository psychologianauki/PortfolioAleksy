import React from "react";
import portfolioBackground from "./assets/image/portfolioBackground.jpg";

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
      </div>
    </div>
  );
}
