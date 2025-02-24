import React from "react";
import { Component } from "react";
import CountryData from "../data/countries.js";
import Frame from "../styles/frame.module.css";
import CountryCard from "../styles/CountryCard.module.css";
import Flag from "../styles/Flag.module.css";
import Details from "../styles/Details.module.css";
import Button from "../styles/Button.module.css";
class App extends Component {
  state = {
    index: 0,
  };

  selectCountry = () => {
    const interval = setInterval(() => {
      this.setState((prevState) => {
        if (this.state.index <= 31) {
          return { index: prevState.index + 1 };
        } else {
          clearInterval(interval);
          this.state.index = 0;
        }
      });
    }, 500);
  };

  render() {
    let index = this.state.index;
    return (
      <div className={Frame.style}>
        <div className={CountryCard.style}>
          <div className={Flag.container}>
            <div className={Flag.frame}>
              <img src={CountryData[index].flag} alt="image of flag"></img>
            </div>
            <div className={Flag.name}>{CountryData[index].name}</div>
          </div>

          <div className={Details.container}>
            <p>
              Capital:
              <span id="name">{CountryData[index].capital}</span>
            </p>
            <p>
              Languages:
              <span id="language">
                {CountryData[index].languages.join(", ")}
              </span>
            </p>
            <p>
              Population:
              <span id="population">{CountryData[index].population}</span>
            </p>
            <p>
              Currency:
              <span id="country">{CountryData[index].currency}</span>
            </p>
          </div>
        </div>
        <div className={Button.container}>
          <button className={Button.style} onClick={this.selectCountry}>
            Select Country
          </button>
        </div>
      </div>
    );
  }
}
export default App;
