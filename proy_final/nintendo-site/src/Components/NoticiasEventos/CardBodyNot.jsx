import React from 'react'

const CardBodyNot = ({date, body}) => {
    
    return (
        <div>
        <h5>{date}</h5>
        <h5>{body}</h5>
        <span>
            <a href="www.kodemia.mx">
              Read more ▷
            </a>
        </span>

            
        </div>
    )
}

export default CardBodyNot
