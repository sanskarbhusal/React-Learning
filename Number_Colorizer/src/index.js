import React from "react";
import VDOM from "react-dom/client";

const rootElement = document.querySelector(".root");
const root = VDOM.createRoot(rootElement);

/*** CSS ***/
let mainTitleStyle;
let subtitleStyle;

mainTitleStyle = {
  display: "flex",
  fontSize: "2.5em",
  justifyContent: "center",
};

subtitleStyle = {
  display: "flex",
  fontSize: "1.5em",
  justifyContent: "center",
  marginTop: "8px",
};

/*** Title component ***/
const Title = ({ mainTitle, subtitle }) => {
  return (
    <div id="title">
      <div style={mainTitleStyle}>{mainTitle}</div>
      <div style={subtitleStyle}>{subtitle}</div>
    </div>
  );
};

/*** CSS ***/
let gridContainerStyle;
let gridStyle;

gridContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "776px",
  marginTop: "25px",
};

gridStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5em",
  color: "white",
  height: "95px",
  width: "95px",
  fontWeight: "bolder",
  margin: "1px",
};

/*** NumberGrid Component***/
const NumberGrid = ({ range }) => {
  let jsxArr = [];
  /*** array holding 0-range numbers ***/
  while (range >= 0) {
    jsxArr.unshift(range);
    range--;
  }
  function colorCondition(element) {
    if (element == 0) {
      return "green";
    }
    if (element == 1) {
      return "yellow";
    }
    if (element === 2) {
      return "red";
    }
    if (element % 2 == 0) {
      return "green";
    } else {
      let n = 3;
      while (n < element) {
        if (element % n == 0) {
          return "yellow";
        }
        n++;
      }
      return "red";
    }
  }
  /*** JSX array ***/
  const gridElements = jsxArr.map((element) => {
    switch (colorCondition(element)) {
      case "red":
        return (
          <div key={element} style={{ ...gridStyle, backgroundColor: "red" }}>
            {element}
          </div>
        );
      case "green":
        return (
          <div key={element} style={{ ...gridStyle, backgroundColor: "green" }}>
            {element}
          </div>
        );
      case "yellow":
        return (
          <div
            key={element}
            style={{ ...gridStyle, backgroundColor: "#FDDA3B" }}
          >
            {element}
          </div>
        );
    }
  });
  return <div style={gridContainerStyle}>{gridElements}</div>;
};

let appStyle;

/*** CSS ***/
appStyle = {
  width: "760px",
};
const App = () => {
  const mainTitle = "30 Days of React";
  const subtitle = "Number Generator";
  const range = 31;
  return (
    <div style={appStyle}>
      <Title mainTitle={mainTitle} subtitle={subtitle} />
      <NumberGrid range={range} />
    </div>
  );
};
root.render(<App />);
