// import React, { useState } from "react";
import CenterHome from '../Images/CenterHome.jpeg'
import styles from "../Styles/Home.module.scss";

const Home = () => {
  // const [mostrar, setMostrar] = useState(true);
  return (
    <div style={{display: "block"}}>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <img style={{width: "100%", height: "auto"}} src={CenterHome} alt="CenterHome" />
        </div>
        <div style={{display: "flex", justifyContent:"space-between"}}>
          <h2>Termina el 30/11 a las 23:59 (Horario del Pacifico)</h2>
          <button className={styles.button} >Compra ahora ▷</button>
        </div>
    </div>

  );
};

export default Home;
