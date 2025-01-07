import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let mainTitleStyle;
let subtitleStyle;
let graphTitleStyle;
let titleContainerStyle;

/*** CSS ***/
titleContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

mainTitleStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2em",
};

subtitleStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "6px",
  fontSize: "1.5em",
};

graphTitleStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.85em",
  marginTop: "4px",
};

/*** Title Component ***/
const Title = ({ title }) => {
  return (
    <div style={titleContainerStyle}>
      <div style={mainTitleStyle}>{title.mainTitle}</div>
      <div style={subtitleStyle}>{title.subtitle}</div>
      <div style={graphTitleStyle}>{title.graphTitle}</div>
    </div>
  );
};

let wholeBarRowContainerStyle;
let barNameAndBarContainerStyle;
let barNameStyle;
let barWrapperStyle;
let barStyle;
let barValueStyle;

/*** CSS ***/
wholeBarRowContainerStyle = {
  display: "flex",
  justifyContent: "compress",
  width: "100%",
  height: "30px",
  marginTop: "5px",
};

barNameAndBarContainerStyle = {
  display: "flex",
  justifyContent: "left",
  width: "",
};

barNameStyle = {
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  fontWeight: "bolder",
  minWidth: "115px",
  marginRight: "4px",
};

barWrapperStyle = {
  display: "flex",
  justifyContent: "left",
  minWidth: "",
  marginRight: "3px",
};

barStyle = {
  backgroundColor: "#FEA501",
  borderRadius: "2px",
};

barValueStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bolder",
  minWidth: "80px",
};

/*** Bar Component ***/
const Bar = ({ barName, barValue, barWidth }) => {
  return (
    <div style={wholeBarRowContainerStyle}>
      <div style={barNameAndBarContainerStyle}>
        <div style={barNameStyle}>{barName.toUpperCase()}</div>
        <div style={barWrapperStyle}>
          <div style={{ ...barStyle, ...{ width: barWidth } }}></div>
        </div>
      </div>
      <div style={barValueStyle}>{barValue}</div>
    </div>
  );
};

let graphStyle;

graphStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "500px",
};

const Graph = ({ width, data }) => {
  const barComponentArr = [];

  //sorting the population data in descending order in terms of population value
  data.sort((a, b) => {
    if (a.value > b.value) {
      return -1;
    } else if (a.value == b.value) {
      return 0;
    } else {
      return 1;
    }
  });

  //calculating graph width by normalizing population into percentage
  data.forEach((e, i, arr) => {
    if (i == 0) {
      e.width = width;
      barWrapperStyle.minWidth = e.width;
      barNameAndBarContainerStyle.width += barNameStyle.minWidth + e.width;
    } else {
      e.width = (e.value / arr[0].value) * arr[0].width;
      console.log(e.width);
    }
  });

  data.forEach((obj, i) => {
    if (i == 0) {
      barComponentArr.push(
        <Bar
          barName={obj.name}
          barValue={obj.value}
          barWidth={obj.width}
          key={i}
        />
      );
    } else {
      barComponentArr.push(
        <Bar
          barName={obj.name}
          barValue={obj.value}
          barWidth={obj.width}
          key={i}
        />
      );
    }
  });
  return <div style={graphStyle}>{barComponentArr}</div>;
};

let appStyle;

/*** CSS ***/
appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const App = () => {
  const title = {
    mainTitle: "30 Days of React",
    subtitle: "World population",
    graphTitle: "Ten most populated countries",
  };
  const data = [
    {
      name: "world",
      value: 7693165599,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    ,
    {
      name: "china",
      value: 1377422166,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "india",
      value: 1295210000,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "usa",
      value: 323947000,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "indonesia",
      value: 258705000,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "brazil",
      value: 206135893,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "pakistan",
      value: 194125062,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "nigeria",
      value: 186988000,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "bangladesh",
      value: 161006790,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "russia",
      value: 146599183,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
    {
      name: "japan",
      value: 126960000,
      //you must provide this property when adding more objects.
      width: "The value will be decided by the algorithm itself.",
    },
  ];

  const width = 400;
  const thickness = 10;
  return (
    <div style={appStyle}>
      <Title title={title} />
      <Graph width={width} data={data} thickness={thickness} />
    </div>
  );
};
root.render(<App />);
