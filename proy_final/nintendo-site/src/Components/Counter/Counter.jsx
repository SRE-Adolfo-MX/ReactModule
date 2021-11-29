import React from "react";
import style from "../Styles/button.module.scss"

const Counter = ({ qty, addToCart, onRemoveFromCart, price, id }) => {
  const handleAdd = () => {
    addToCart({ id, price });
  };

  return (
    <div>
      {!qty ? (
        <button className={style.button} onClick={handleAdd}>Comprar</button>
      ) : (
        <div>
          <button className={style.btn} onClick={onRemoveFromCart}>-</button>
          {qty || 0}
          <button className={style.btn} onClick={handleAdd}>+</button>
        </div>
      )}
    </div>
  );
};

export default Counter;
