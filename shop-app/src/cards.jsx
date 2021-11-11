import CardImage from "./components/CardImage/cardImage";
import PrimaryButton from "./components/PrimaryButton/primaryButton"
import CardText from "./components/CardText/cardText"
import CardTitle from "./components/cardTitle/cardTitle"

const Card = () => {
    return (
        <div className="container" style={{width: "18rem", textAlign: "center"}}>
            <div class="center">
                <CardImage/>
                <div className="card-body">
                    <CardTitle TEXT="IMAC"/>
                    <CardText TEXT="Contenido del Empaque iMac, Magic Keyboard, Magic Mouse, Adaptador de Corriente de 143W, Cable de corriente (2M), Cable de USB-C a Lightning."/>
                    <PrimaryButton LINK="https://www.walmart.com.mx/computadoras/computadoras-de-escritorio/todas-las-computadoras-de-escritorio/imac-apple-mgpd3e-a-chip-m1-8gb-ram-512gb-ssd_00019425212284?gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRsP6079AbQiAIr1XKGGmGPkF0iNJ_fsjlUYfYNnD8E6PaDn9rckT2caAv8pEALw_wcB"/>
                </div>
            </div>

        </div>
    )
}


export default Card;

