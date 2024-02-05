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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        // here we use react fragment. this serves as main element on jsx so that we can render multiple element
        // the fragment will not actually render on html it only handles the group of elements but does not affect the entire design
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {/* here we iterate each data on an object and used the data as props to render components for each data */}
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}

            {/* simple way of using components and passing props manually */}
            {/* <Pizza
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
            /> */}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

// by destructuring props you can easily determine all the data that has been passed on component
// in destructuring props the name of data that is being passed on component and the name of parameter here on component must be same
// the name of data on destructured props must be inside {}
function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
        <span>{pizzaObj.soldOut ? "Sold Out" : "Available"}</span>
      </div>
    </li>
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
      <div className="order">
        <p>
          {new Date().toLocaleDateString()}. We're currently {status}!
        </p>
        <button className="btn">Order</button>
        {/* <a href="about.html">
          <span>About Us</span>
        </a> */}
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
