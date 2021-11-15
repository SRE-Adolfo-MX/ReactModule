import React, { useState } from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle/CardTitle";
import CardBody from "./CardBody";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import styles from "./card.module.scss";

const Card = ({ title = "Sin Título", imgUrl, text, linkBtn, oferta=false, precio=20 }) => {

  const [oaxaqueno, setOaxaqueno] = useState(false);
  const [atole, setAtole] = useState(false);
  let sabor
  const [saborAtole, setSaborAtole] = useState(sabor);

  let infoCompra;

  if (oaxaqueno) {
     infoCompra = "Tu Compra: Tamal Oaxaqueño "
  } else {
    infoCompra = "Tu Compra: Tamal normal "
  }

  let respuesta

  if (atole) {
    respuesta = " Atole"
    infoCompra = infoCompra + respuesta
  } else {
    respuesta = ""
    infoCompra = infoCompra + respuesta
  }

let respuesta2
  if (saborAtole && atole) {
    respuesta2 = ` de sabor ${saborAtole}`
    infoCompra = infoCompra + respuesta2
  } else {
    respuesta2 = ""
    infoCompra = infoCompra + respuesta2
  }

  const compraStatus = infoCompra ? false : true
  let precioFinal = precio + (oaxaqueno ? 10 : 0)
  precioFinal = precioFinal + (atole ? 15 : 0)
  const buttonStatus = atole ?  false : true

  return (
    <div className={`card ${styles.card}`}>
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        <CardTitle title={title} oferta={oferta} />
        <p>{precioFinal}</p>
        <div>
          <button onClick={()=>setOaxaqueno(false)}>Hoja de Maiz</button>
          <button onClick={()=>setOaxaqueno(true)}>Hoja de plátano</button>
        </div>
        <div>
          <button onClick={()=>setAtole(true)}>Con Atole</button>
          <button onClick={()=>setAtole(false)}>Sin Atole</button>
        </div>
        <div>
          <button disabled={buttonStatus} onClick={()=>setSaborAtole("Fresa")}>Atole Fresa</button>
          <button disabled={buttonStatus} onClick={()=>setSaborAtole("Cajeta")}>Atole Cajeta</button>
          <button disabled={buttonStatus} onClick={()=>setSaborAtole("Chocolate")}>Atole Chocolate</button>
        </div>
        <CardBody text={text} />
        <div className={`card-title ${styles.totalCompra}`}>
          {infoCompra}
          <br/>
          <br/>
          <PrimaryButton link={linkBtn} text="Comprar" />
        </div>
        
        
       
      </div>
    </div>
  );
};

export default Card;
