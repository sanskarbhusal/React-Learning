import React from "react";
import ReactDOM from "react-dom/client";
import sanskarImage from "./images/sanskar.png";

const rootElement = document.getElementById("root");

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Sanskar",
  lastName: "Bhusal",
};
const date = "oct 2, 2020";
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
);

const UserCard = () => (
  <div className="user-card">
    <img src={sanskarImage} alt="sanskar image" />
    <h2>Sanskar Bhusal</h2>
  </div>
);
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
);

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
