import React from "react";
import Counter from "../Counter/Counter";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle/CardTitle";

const Card = ({
  title = "Sin Título",
  imgUrl,
  price = 20,
  addToCart,
  onRemoveFromCart,
  id,
  qty,
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        <CardTitle title={title} id={id}/>
        <p>{price}</p>
        <Counter
          qty={qty}
          addToCart={addToCart}
          onRemoveFromCart={onRemoveFromCart}
          price={price}
          id={id}
        />
      </div>
    </div>
  );
};

export default Card;
