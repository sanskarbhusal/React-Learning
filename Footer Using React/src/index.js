import react from "react";
import reactDOM from "react-dom/client";
const root = reactDOM.createRoot(document.getElementById("root"));

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <p style={{ fontSize: "1.5em" }}>SUBSCRIBE</p>
      <p>Sign up with your email address to receive news and updates</p>
      <div id="input-fields" style={{ marginTop: "15px" }}>
        <input id="first-name-field" placeholder="First name"></input>
        <input id="last-name-field" placeholder="Last name"></input>
        <input id="email-field" placeholder="Email"></input>
      </div>
      <div>
        <button id="subscribe-button" onClick={props.subscribeButton.pressed}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const obj = {
    pressed: function () {
      const firstName = document.getElementById("first-name-field").value;
      const lastName = document.getElementById("last-name-field").value;
      const email = document.getElementById("email-field").value;
      alert(`${firstName} ${lastName} has subscribed with email: ${email}`);
    },
  };
  return <Footer subscribeButton={obj} />;
};

root.render(<App />);
