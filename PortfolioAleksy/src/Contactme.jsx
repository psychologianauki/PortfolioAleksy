import React from "react";

export default function Contactme() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="header">CONTACT </div>
      </div>
      <form>
        <input
          className="forminput"
          type="email"
          placeholder="ENTER YOUR NAME*"
          style={{
            width: "50%",
            height: "30px",
            marginBottom: "30px",
          }}
        ></input>
        <input
          className="forminput"
          type="email"
          placeholder="ENTER YOUR EMAIL*"
          style={{
            width: "50%",
            height: "30px",
            marginBottom: "30px",
          }}
        ></input>
        <div>
          <textarea
            className="forminput"
            rows="7"
            placeholder="YOUR MESSAGE*"
            style={{ width: "50%", marginBottom: "30px" }}
          ></textarea>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "10%",
              borderRight: "2px solid black",
              borderLeft: "2px solid black",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            SUBMIT
          </div>
        </div>
      </form>
    </div>
  );
}
