import React from "react";
import Javascript from "./assets/icons/Javascript";
import Html from "./assets/icons/Html";
import Css from "./assets/icons/Css";
import React1 from "./assets/icons/React1";
import Typescript from "./assets/icons/Typescript";
import Firebase from "./assets/icons/Firebase";
import Git from "./assets/icons/Git";
import Figma from "./assets/icons/Figma";
export default function Skills() {
  return (
    <div className="skillspart">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="header">SKILLS</div>
      </div>
      <div>Using now:</div>
      <div>
        <Javascript />
        <Html />
        <Css />
        <React1 />
      </div>
      <div>
        <Typescript />
        <Firebase />
        <Git />
        <Figma />
      </div>
      <div>Learning: </div>
      <div>a few icons will be here, with firebase up</div>
      <div>Other skills: </div>
      <div> Languages/ cpp will be here</div>
    </div>
  );
}
