import React from "react";
import Javascript from "./assets/icons/Javascript";
import Html from "./assets/icons/Html";
import Css from "./assets/icons/Css";
import React1 from "./assets/icons/React1";
import Typescript from "./assets/icons/Typescript";
import Firebase from "./assets/icons/Firebase";
import Git from "./assets/icons/Git";
import Figma from "./assets/icons/Figma";
import Java from "./assets/icons/Java";
import Python from "./assets/icons/Python";
import Cpp from "./assets/icons/Cpp";
import GreatB from "./assets/icons/GreatB";
import Germany from "./assets/icons/Germany";

export default function Skills() {
  return (
    <div className="skillspart" style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="header">SKILLS</div>
      </div>
      <div
        style={{ fontSize: "1.8rem", marginTop: "30px", marginBottom: "10px" }}
      >
        Using now:
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "10px",
        }}
      >
        <div>
          <Javascript />
          <div>Javascript</div>
        </div>
        <div>
          <Html />
          <div>HTML</div>
        </div>
        <div>
          <Css />
          <div>CSS</div>
        </div>
        <div>
          <React1 />
          <div>React</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "10px",
        }}
      >
        <div>
          <Typescript />
          <div>Typescript</div>
        </div>
        <div>
          <Firebase />
          <div>Firebase</div>
        </div>
        <div>
          {" "}
          <Git />
          <div>GIT</div>
        </div>
        <div>
          <Figma />
          <div>Figma</div>
        </div>
      </div>
      <div
        style={{ fontSize: "1.8rem", marginTop: "30px", marginBottom: "10px" }}
      >
        Learning:{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "10px",
        }}
      >
        <div>
          <Java />
          <div>JAVA</div>
        </div>
        <div>
          <Python />
          <div>Python</div>
        </div>
      </div>
      <div
        style={{ fontSize: "1.8rem", marginTop: "30px", marginBottom: "10px" }}
      >
        Other skills:{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "10px",
        }}
      >
        <div>
          {" "}
          <Cpp />
          <div>C++ 23</div>
        </div>
        <div>
          {" "}
          <GreatB />
          <div>English B2</div>
        </div>
        <div>
          <Germany />
          <div>German B2+</div>
        </div>
      </div>
    </div>
  );
}
