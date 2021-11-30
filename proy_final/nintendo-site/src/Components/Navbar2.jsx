import React from 'react'
import { Link } from 'react-router-dom'
import JuegosImages from './Images/juegos.png'
import Equipo from './Images/Equipo.png'
import Noticias from './Images/Noticias.png'
import styles from "./Styles/Navbar2.module.scss";

const Navbar2 = ({cartItems, emptyCart}) => {
  return (
    <div className={styles.navBar2} style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <Link to="/Juegos"><img src={JuegosImages} alt="Juegos" /> </Link>
      <Link to="/Equipos"><img src={Equipo} alt="Equipo" /></Link>
      <Link to="/Noticias"><img src={Noticias} alt="Noticias" /></Link>
    </div>
  )
}

export default Navbar2