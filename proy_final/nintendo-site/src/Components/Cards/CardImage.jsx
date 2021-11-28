import React from "react";

const CardImage = ({imgUrl}) => {
  return (
    <img style={{width: "100%",height: "auto"}}
      src={imgUrl}
      className="card-img-top"
      alt="tamal"
    />
  );
};

export default CardImage;
