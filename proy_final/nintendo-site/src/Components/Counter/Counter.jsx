import React from "react";

const Counter = ({ qty, addToCart, onRemoveFromCart, price, id }) => {
  const handleAdd = () => {
    addToCart({ id, price });
  };

  return (
    <div>
      {!qty ? (
        <button onClick={handleAdd}>Comprar</button>
      ) : (
        <div>
          <button onClick={onRemoveFromCart}>-</button>
          {qty || 0}
          <button onClick={handleAdd}>+</button>
        </div>
      )}
    </div>
  );
};

export default Counter;
