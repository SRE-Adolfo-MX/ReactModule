import React from "react";

const CardImage = ({imgUrl}) => {
  return (
    <img style={{width: "100%", height: "135px", objectFit: "cover", borderRadius: "6px"}}
      src={imgUrl}
      className="card-img-top"
      alt="tamal"
    />
  );
};

export default CardImage;
