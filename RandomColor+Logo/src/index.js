import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./images/react_logo.png";
import jsLogo from "./images/js_logo.png";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";

const rootElement = document.getElementById("root");

const htmlImg = <img src={htmlLogo} alt="html logo"></img>;

const cssImg = <img src={cssLogo} alt="css logo"></img>;

const jsImg = <img src={jsLogo} alt="javascript logo"></img>;

const reactImg = <img src={reactLogo} alt="react logo"></img>;

const title = (
  <p>
    <strong>Frontend Technologies</strong>
  </p>
);

const techStack = (
  <div class="logo-container">
    {htmlImg}
    {cssImg}
    {jsImg}
    {reactImg}
  </div>
);
const TechStack = () => techStack;

const generateColor = () => {
  let color = "#";
  const str = "1234567890abcdef";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return color;
};

const ColorStrip = (color) => {
  const colorStrip = (
    <div
      style={{
        backgroundColor: color,
        width: "70%",
        height: 50,
        justifyItems: "center",
      }}
    >
      <p>
        <strong>{color}</strong>
      </p>
    </div>
  );
  return colorStrip;
};

const ColorStripRepeater = () => {
  const numOfStripes = 5;
  let arr = new Array(numOfStripes);
  for (let i = 0; i < numOfStripes; i++) {
    arr.push(ColorStrip(generateColor()));
  }
  return arr;
};
const App = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    {title}
    {TechStack()}
    {ColorStripRepeater()}
  </div>
);

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
