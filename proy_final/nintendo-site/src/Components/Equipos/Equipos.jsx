import React from 'react'
import Console from './Console'
import styles from './Console.module.scss'

const Equipos = () => {
  return (
    <div className={styles.box}>
      <h1 style={{display:'flex', justifyContent:'center', color: '#484848'}}>Elije tu consola Nintendo Switch™️</h1>
      <Console />
    </div>
  )
}

export default Equipos
