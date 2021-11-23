import React from "react";
import styles from "./style/CarShopping.module.scss";

const ShoppingCar = ({ qty, onEmptyCar = () => {} }) => {
  const carStyle = { fonstSize: "2em" };
  return (
    <div className={`card ${styles.primary}`} onEmptyCar={onEmptyCar} style={carStyle}>
      🛒
      {qty}
    </div>
  );
};

export default ShoppingCar;