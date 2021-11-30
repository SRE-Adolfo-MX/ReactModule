import React from 'react'
import { Link } from 'react-router-dom'
import logoNintendo from './Images/logoNintendo.jpg'
import JuegosImages from './Images/juegos.png'
import Equipo from './Images/Equipo.png'
import Noticias from './Images/Noticias.png'
import Cart from './Cart'
import styles from './Styles/Navbar.module.scss'

const Navbar = ({cartItems, emptyCart}) => {
  return (
    <div className={styles.navBar}>
      <img style={{width: '8%', height: '40px', objectFit: 'cover' }} src={logoNintendo} alt="Logo" />  
      <Link to="/Juegos"><img src={JuegosImages} alt="Juegos" /> </Link>
      <Link to="/Equipos"><img src={Equipo} alt="Equipo" /></Link>
      <Link to="/Noticias"><img src={Noticias} alt="Equipo" /></Link>
      <div style={{marginRight:'30px', cursor: 'pointer'}}>
        <Cart cartItems={cartItems} emptyCart={emptyCart} />
      </div>
    </div>
  )
}

export default Navbar