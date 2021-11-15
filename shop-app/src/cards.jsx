import React from 'react';
import CardImage from "./components/CardImage/cardImage";
import PrimaryButton from "./components/PrimaryButton/primaryButton"
import CardText from "./components/CardText/cardText"
import CardTitle from "./components/cardTitle/cardTitle"
import style from "./card.module.scss"

const Card = ({IMAGE, TEXT, TEXT2, text, type, className, url}) => {
    return (
        <div className={style.container} style={{width: "18rem", textAlign: "center"}}>
            <div className="center">
                <CardImage IMAGE={IMAGE}/>
                <div className="card-body">
                    <CardTitle TEXT={TEXT}/>
                    <CardText TEXT={TEXT2}/>
                    <PrimaryButton text={text} type={type} className={className} url={url}/>
                </div>
            </div>

        </div>
    )
}


export default Card;

