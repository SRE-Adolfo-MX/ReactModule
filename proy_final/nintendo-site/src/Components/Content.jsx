import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Styles/Content.module.scss'
import Centerstages from './Images/Centerstages.jpeg'
import E from './Images/E.png'

const Content = () => {

    return (
        <div className={styles.content}> 
            <div className={styles.contentFlex}>
                <h1>Tienda de juegos</h1>
                <button className={styles.button} >Ver todos los juegos ></button>
            </div>
            <div className={styles.Centerstages}>
                <img  src={Centerstages} alt="Centerstages" />
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
           
        </div>        
    )
}

export default Content