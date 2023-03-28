import React from "react";
import { add, getTotal, multiply } from "../../utilities/utilities";
import Cosmetic from "../Cosmetic/Cosmetic";
import './Cosmetics.css'

const Cosmetics = () => {
  const first = 155;
  const second = 15;
  const total = add(first, second);
  const result = multiply(first, second);
  const cosmetics = [
    { id: '1ag', name: "Alta", price: 180 },
    { id: '2gr', name: "Palis", price: 250 },
    { id: '3tg', name: "Malis", price: 140 },
    { id: '4cd', name: "Balis", price: 350 },
    { id: '5gz', name: "Nalis", price: 650 },
    { id: '6ku', name: "Polis", price: 50 },
  ];
  const totalPrice = getTotal(cosmetics)
  return (
    <div>
      <h1>Welcome to our Cosmetics Store!!!</h1>
      <h3>Money Total:{totalPrice}</h3>
      <p>Total:{total}</p>
      <p>Multiply:{result}</p>
      <div className="cosmetics-container">
        {cosmetics.map((cosmetic) => (
          <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
