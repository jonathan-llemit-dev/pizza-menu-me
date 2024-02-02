import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// we use jsx syntax to input some html and css inside js file and inside this js function
// this jsx will be automatically converted into pure html and css using babel which is default on react
// jsx simplifies making react components but if we want we can use pure js to generate a component
function Header() {
  return (
    // sample inline css
    // <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
    //   Fast React Pizza Co.
    // </h1>

    <header className="header">
      <h1 style={{}}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          // when passing a numeric value or any other non-string value you can use js
          price={10}
        />

        <Pizza
          photoName="pizzas/funghi.jpg"
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
        />
      </div>
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
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
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
