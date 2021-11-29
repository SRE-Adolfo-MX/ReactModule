import React from "react";
import ConsoleDescription from "./ConsoleDescription";
import ConsoleImage from "./ConsoleImage";
import ConsoleTitle from "./ConsoleTitle";
import styles from "./Console.module.scss";

// Console es la CARD

const Console = () => {

  return (
    <div className={styles.content}>
      <div className={styles.contentFlex}>
        <ConsoleTitle title="Nintendo Switch – Modelo OLED paquete blanco" />
        <button className={styles.button2}>Encuentra proveedores ▷ </button>
      </div>
      <div className={styles.description}>
        <ConsoleImage />
        <ConsoleDescription
          text1="Con controles Joy-Con de color blanco, 
            consola de color negro y una base de color blanco."
          text2="Juega en casa en tu televisor o en el camino con una 
          vibrante pantalla OLED de 7 pulgadas (17.78 cm) con 
          la consola Nintendo Switch – Modelo OLED. Además de 
          la pantalla, que ofrece colores brillantes y contrastes 
          definidos, la consola Nintendo Switch – Modelo OLED 
          incluye 64 GB de almacenamiento interno, una base con 
          un puerto LAN para conexión por cable para jugar en el 
          televisor, un soporte ajustable y amplio y audio mejorado."
        />
        
      </div>
    </div>
  );
};

export default Console;
