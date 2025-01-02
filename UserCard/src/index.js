import React from "react";
import ReactDOM from "react-dom/client";
import dpPath from "./images/sanskar.png";
const rootElement = document.querySelector(".root");
const root = ReactDOM.createRoot(rootElement);

const DisplayPicture = (props) => {
  /*** CSS  ***/
  let imgStyle;
  let nameStyle;
  let professionStyle;
  let dpContainerStyle;

  dpContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    backgroundColor: "transparent",
    width: "300px",
  };

  imgStyle = {
    height: "230px",
    width: "230px",
    borderRadius: "1000px",
    border: "1px solid transparent",
    filter: "blur(0px)",
    marginLeft: "20px",
    filter: "blur(10px)",
  };

  nameStyle = {
    fontSize: "1.8em",
    fontWeight: "bold",
    marginTop: "10px",
    marginLeft: "20px",
  };

  professionStyle = {
    marginTop: "30px",
    marginLeft: "20px",
  };

  /*** JSX ***/
  const img = <img id="dp" style={imgStyle} src={dpPath} alt="author"></img>;

  const name = <div style={nameStyle}>{props.author.name}</div>;

  const profession = (
    <div style={professionStyle}>{props.author.profession}</div>
  );

  /*** Component Structure ***/
  return (
    <div style={dpContainerStyle}>
      {img}
      {name}
      {profession}
    </div>
  );
};

const Skills = (props) => {
  /*** CSS ***/
  let skillSectionStyle;
  let skillSectionTitleStyle;
  let skillCapsuleContainerStyle;
  let skillCapsuleStyle;

  skillSectionStyle = {};

  skillSectionTitleStyle = {
    fontSize: "1.8em",
    marginTop: "20px",
    marginLeft: "20px",
  };

  skillCapsuleContainerStyle = {
    marginTop: "30px",
    marginLeft: "25px",
  };

  skillCapsuleStyle = {
    backgroundColor: "#2BCFCE",
    color: "white",
    borderRadius: "8px",
    padding: "8px",
    marginTop: "20px",
    marginRight: "8px",
    fontWeight: "bold",
  };

  /*** JSX ***/
  const skillSectionTitle = <div style={skillSectionTitleStyle}>SKILLS</div>;

  const skillCapsuleContainer = (
    <div style={skillCapsuleContainerStyle}>
      {props.techList.map((tech) => (
        <span style={skillCapsuleStyle}>{tech}</span>
      ))}
    </div>
  );
  /*** Component Structure ***/
  return (
    <section style={skillSectionStyle}>
      {skillSectionTitle}
      {skillCapsuleContainer}
    </section>
  );
};

const Card = () => {
  /*** CSS ***/
  let cardStyle;

  cardStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1300px",
    minHeight: "450px",
    maxHeight: "600px",
  };
  /*** props ***/
  const author = {
    name: "Sanskar Bhusal",
    profession: "Jr.Member, Unemployment Department",
    techList: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node",
      "Java",
      "Spring Java",
      "Spring Boot",
    ],
  };
  return (
    <div className="shadow round-border" style={cardStyle}>
      <DisplayPicture author={author} />
      <Skills techList={author.techList} />
    </div>
  );
};

root.render(<Card />);
