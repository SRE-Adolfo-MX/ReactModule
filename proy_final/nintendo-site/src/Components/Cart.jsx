import React from "react";

const Cart = ({ cartItems, emptyCart}) => {
  // const totalItems = Object.values(cartItems).reduce(
  //   (sum, item) => sum + item.qty,
  //   0
  // );
  const totalItems = 10
  const totalPrice = 10

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{totalItems}</span>
        🛒
        <span>${totalPrice}</span>
      </div>
      <div onClick={emptyCart}>🗑️</div>
    </>
  );
};

export default Cart;
