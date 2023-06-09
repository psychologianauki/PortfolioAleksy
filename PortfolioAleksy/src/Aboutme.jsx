import React from "react";

export default function Aboutme() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div className="header">ABOUT ME</div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div
          className="aboutmetext"
          style={{
            width: "80%",
            fontSize: "1.2rem",
            fontWeight: "600",
            wordSpacing: "5px",
            lineHeight: "1.5",
            textAlign: "justify",
          }}
        >
          Hello! My name is Aleksy and I am studying Automation, Robotics and
          Industrial Informatics at Warsaw University of Technology. I am
          passionate about web development and I am eager to pursue a career as
          a frontend developer. While I am still early in my academic journey, I
          have been working hard to gain practical experience in the field. In
          my spare time, I have been studying web development on my own,
          learning HTML, CSS, and JavaScript, as well as popular frontend
          frameworks such as React and Typescript.
          <br></br>
          <br></br>I have also completed several personal projects, including
          CryptoMarket and ToDoList, which have allowed me to apply my skills
          and knowledge in a practical setting. In addition to my technical
          skills, I am a highly motivated and enthusiastic learner who is eager
          to take on new challenges and work collaboratively with others. I am a
          strong communicator and have excellent attention to detail, which
          allows me to produce high-quality work. I am excited about the
          opportunity to contribute my skills and knowledge to a team and to
          continue to grow as a developer.
          <br></br>
        </div>
      </div>
    </div>
  );
}
