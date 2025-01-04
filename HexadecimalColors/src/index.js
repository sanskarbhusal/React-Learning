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
};

mainTitleStyle = {
  fontSize: "3em",
};

subtitleStyle = {
  fontSize: "1.5em",
  marginTop: "8px",
  marginBottom: "30px",
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

let gridStyle;
let gridContainerStyle;

gridContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
};

gridStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
  height: "80px",
  margin: "1px",
  color: "white",
  fontWeight: "bolder",
};

const ColorGrid = () => {
  function randomHex() {
    const validHexChars = "abcdef1234567890";
    const dict = validHexChars.split("");
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      hex += dict[index];
    }
    return hex;
  }
  let gridArr = [];
  for (let j = 0; j <= 31; j++) {
    const color = randomHex();
    gridArr.push(
      <div key={j} style={{ ...gridStyle, backgroundColor: color }}>
        {color}
      </div>
    );
  }
  return (
    <div>
      <div style={gridContainerStyle}>{gridArr}</div>
    </div>
  );
};

let appStyle;

/*** CSS ***/
appStyle = {
  display: "flex",
  flexDirection: "column",
  width: "657px",
  height: "420px",
  justifyContent: "center",
  alignItems: "center",
};

const App = () => {
  const title = {
    mainTitle: "30 Days of React",
    subtitle: "Hexadecimal Colors",
  };
  return (
    <div style={appStyle}>
      <Title title={title} />
      <ColorGrid />
    </div>
  );
};
root.render(<App />);
