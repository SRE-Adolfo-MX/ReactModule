import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import Centerstages from '../Images/Centerstages.jpeg'
import E from '../Images/E.png'
import Card from "../Cards/Card";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from '../Styles/Content.module.scss'

const juegosHeader = () => {
   
    return (
      <div className={styles.contentFlex}>
        <h1>Tienda de juegos</h1>
      </div>
  
    );
  };

export default juegosHeader