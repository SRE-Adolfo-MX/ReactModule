import React from "react";

const Cart = ({ cartItems, emptyCart}) => {
  // const totalItems = Object.values(cartItems).reduce(
  //   (sum, item) => sum + item.qty,
  //   0
  // );
  const totalItems = Object.values(cartItems).length
  const totalPrice = Object.values(cartItems).reduce(
    (sum, item) => sum + item.price,
    0
  );
  return (
    <>
      <div style={{ display: "flex", justifyContent:'space-between' }}>
        <span>{totalItems}</span>
        🛒
        <span>${totalPrice}</span>
        <div onClick={emptyCart}>🗑️</div>
      </div>

    </>
  );
};

export default Cart;
