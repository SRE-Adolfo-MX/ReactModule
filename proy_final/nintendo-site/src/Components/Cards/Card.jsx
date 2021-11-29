import React from "react";
import Counter from "../Counter/Counter";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle/CardTitle";
// import style from "../Styles/Card.module.scss"

const Card = ({
  title = "Sin Título",
  imgUrl,
  price = 20,
  addToCart,
  onRemoveFromCart,
  id,
  qty,
}) => {

  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "18rem",
    margin: "10px",
  }


  return (
    <div className="card" style={cardStyle}>
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
