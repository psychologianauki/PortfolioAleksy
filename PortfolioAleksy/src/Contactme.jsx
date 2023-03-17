import React from "react";

export default function Contactme() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="header">Contact </div>
      </div>
      <form>
        <div>Twój e-mail*</div>

        <input
          className="forminput"
          type="email"
          placeholder="enter your email"
          style={{
            width: "50%",
            borderColor: "transparent",
          }}
        ></input>
        <div>Your message</div>
        <div>
          <textarea
            className="formmessage"
            rows="6"
            placeholder="enter your message"
          ></textarea>
        </div>
        <button>Sent!</button>
      </form>
    </div>
  );
}
