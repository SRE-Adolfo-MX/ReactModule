import React from 'react'
import { Link } from 'react-router-dom'
import logoNintendo from './Images/logoNintendo.jpg'
import JuegosImages from './Images/juegos.png'
import Equipo from './Images/Equipo.png'
import Noticias from './Images/Noticias.png'

const Navbar = ({cartItems, emptyCart}) => {
  return (
    <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <img style={{width: '93px', height: '55px' }} src={logoNintendo} alt="Logo" />  
      <Link to="/Juegos"><img src={JuegosImages} alt="Juegos" /> </Link>
      <Link to="/Equipos"><img src={Equipo} alt="Equipo" /></Link>
      <Link to="/Noticias"><img src={Noticias} alt="Noticias" /></Link>
    </div>
  )
}

export default Navbar