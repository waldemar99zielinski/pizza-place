import React from "react";
import "./Panel.css";
import PizzaOverView from "./pizzaPanel/PizzaOverView";
import Cart from "./cart/Cart";
import PizzaOrderPanel from "./PizzaOrderPanel/PizzaOrderPanel";
const data = [
  {
    id: 1,
    name: "Wiejska",
    rating: 4.3,
    price: 12,
    photo: "https://assets.puzzlefactory.pl/puzzle/238/423/original.jpg",
  },
  {
    id: 2,
    name: "owoce morza",
    rating: 3.0,
    price: 25,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Pizza_with_tomatoes.jpg/1200px-Pizza_with_tomatoes.jpg",
  },
  {
    id: 3,
    name: "Wiejska",
    rating: 4.3,
    price: 12,
    photo:
      "https://www.mojegotowanie.pl/uploads/media/recipe/0001/100/pizza-z-kurczakiem.jpeg",
  },

  {
    id: 1,
    name: "Wiejska",
    rating: 4.3,
    price: 12,
    photo: "https://assets.puzzlefactory.pl/puzzle/238/423/original.jpg",
  },
  {
    id: 2,
    name: "owoce morza",
    rating: 3.0,
    price: 25,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Pizza_with_tomatoes.jpg/1200px-Pizza_with_tomatoes.jpg",
  },
  {
    id: 3,
    name: "Wiejska",
    rating: 4.3,
    price: 12,
    photo:
      "https://www.mojegotowanie.pl/uploads/media/recipe/0001/100/pizza-z-kurczakiem.jpeg",
  },
  {
    id: 4,
    name: "Wiejska",
    rating: 4.3,
    price: 12,
    photo: "https://assets.puzzlefactory.pl/puzzle/238/423/original.jpg",
  },
];

const Panel = () => {
  console.log();
  return (
    <div>
      <div className="panel-container">
        <PizzaOverView data={data} />

        {/* <Cart /> */}
        <PizzaOrderPanel />
      </div>
    </div>
  );
};

export default Panel;
