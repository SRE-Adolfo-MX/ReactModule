import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import styles from '../Styles/Content.module.scss'
import Centerstages from '../Images/Centerstages.jpeg'
import E from '../Images/E.png'
import Card from "../Cards/Card";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import juegosHeader from "./JuegosHeader"

const Juegos = ({addToCart, removeFromCart, cartItems}) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      let elComponenteExiste = true;
  
      fetch("https://api-cafe-tamales.herokuapp.com/api/tamales")
        .then((result) =>
          result.json().then((data) => {
            if (elComponenteExiste) {
              setItems(data.tamal);
            }
          })
        )
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
  
      return () => {
        elComponenteExiste = false;
      };
    }, []);


    console.log("esto es resultado",items)
  
    if (loading)
      return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  
    if (error)
      return (
        <div className="alert alert-danger">
          Error al obtener los datos. Por favor, intentar nuevamente
        </div>
      );
  

    return (
        
        <div className={styles.content}> 
            <div className={styles.contentFlex}>
                <h1>Tienda de juegos</h1>
                <button className={styles.button} >Ver todos los juegos ></button>
            </div>
            <div>
                <img className={styles.Centerstages}  src={Centerstages} alt="Centerstages" />
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <h2> Ya disponible </h2>
                <button className={styles.button} >Más información ></button>
                <img  src={E} alt="E" />
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <h2> Los más vendidos de Nintendo Switch </h2>
                <button className={styles.button2} > Ver la lista completa ></button>
            </div>
        {items.map((item) => {
        const { _id, img, name, price } = item;
        const onRemoveFromCart = () => {
          removeFromCart({id: _id, price})
        }
        const qty = cartItems[_id]?.qty
        
        return (
        
        <Card
            key={_id}
            title={name}
            imgUrl={img}
            price={parseInt(price)}
            addToCart={addToCart}
            onRemoveFromCart={onRemoveFromCart}
            id={_id}
            qty={qty}
          />
        );
      })}
           
        </div>        
    )
}

export default Juegos