import React from "react";
import styles from "./CardImage.module.scss";

const CardImage = ({imgUrl}) => {
  return (
    <img
      src={imgUrl}
      className="card-img-top"
      alt="tamal"
    />
  );
};

export default CardImage;
