import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{}}>About Us</h1>
    </header>
  );
}

function Footer() {
  // this is a sample in making a certain html element to render using only pure js without jsx
  // return React.createElement("footer", null, "We're currently open!");

  const currentHour = new Date().getHours();
  const openingHour = 8;
  const closingHour = 17;
  let status = "";

  // you can add/make/call any logical operations inside components because its just like a normal js function
  currentHour >= openingHour && currentHour < closingHour
    ? (status = "open")
    : (status = "close");

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}. We're currently {status}!
      <a href="about.js">
        <span>About Us</span>
      </a>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
