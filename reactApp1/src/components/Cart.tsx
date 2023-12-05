import React from "react";
import Button from "./Button/Button";

interface Props {
  cartItems: string[];
  onClick: () => void;
}

const Cart = ({ cartItems, onClick }: Props) => {
  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        <Button onClick={onClick}>Clear</Button>
      </p>
    </>
  );
};

export default Cart;
