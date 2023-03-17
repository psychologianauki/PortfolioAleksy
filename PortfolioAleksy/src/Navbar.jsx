import React from "react";

export default function Navbar() {
  return (
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
  );
}
