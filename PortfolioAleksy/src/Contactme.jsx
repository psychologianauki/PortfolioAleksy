import React from "react";

export default function Contactme() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div className="header" style={{ marginTop: "20px" }}>
          CONTACT{" "}
        </div>
      </div>
      <form
        action="https://formsubmit.io/send/aleksylisowski@gmail.com"
        method="POST"
      >
        <input
          className="forminput"
          type="text"
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
          <button
            type="submit"
            style={{
              width: "10%",
              borderRight: "2px solid black",
              borderLeft: "2px solid black",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
