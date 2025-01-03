import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

let titleContainerStyle;
let mainTitleStyle;
let subtitleStyle;

/*** CSS ***/
titleContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "red",
};

mainTitleStyle = {
  fontSize: "3em",
};

subtitleStyle = {
  fontSize: "1.5em",
  marginTop: "8px",
};

/*** Title Component ***/
const Title = ({ title: { mainTitle, subtitle } }) => {
  return (
    <div style={titleContainerStyle}>
      <div style={mainTitleStyle}>{mainTitle}</div>
      <div style={subtitleStyle}>{subtitle}</div>
    </div>
  );
};

const ColorGrid = () => {
  return (
    <div>
      <div className="demo"></div>
      <div className="demo"></div>
    </div>
  );
};
const App = () => {
  const title = {
    mainTitle: "30 Days of React",
    subtitle: "Hexadecimal Colors",
  };
  return (
    <div>
      <Title title={title} />
      <ColorGrid />
    </div>
  );
};
root.render(<App />);
