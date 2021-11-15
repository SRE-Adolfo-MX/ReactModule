import React from 'react';

const CardImage = ({IMAGE}) => {
    return (
        <img
            src={IMAGE}
            className="card-img-top"
            width="200px"
            alt="..."
        />
    )
}


export default CardImage;
