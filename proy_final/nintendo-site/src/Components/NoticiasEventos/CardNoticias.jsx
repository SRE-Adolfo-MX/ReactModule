import React, {useState, useEffect  } from 'react'
import CardImageNot from "./CardImageNot";
import CardBodyNot from "./CardBodyNot";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from "./CardImageNot.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import Loader from "react-loader-spinner";



const CardNoticias = ({img}) => {
    const noticiasStyle= { 
        border: "1px solid gray",
        margin: "5px",
        padding: "15px",
        minWidth: "300px",
        width: "300px",
    }
    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

      fetch("https://nintendo-fddf6-default-rtdb.firebaseio.com/Noticias/.json")
      .then((result) =>{
        result.json().then((data) => {
          console.log(data)   
          setItems(data);
        })
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));  
    }, []);


  if (loading)
      return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  
  if (error)
    return (
      <div className="alert alert-danger">
        Error al obtener los datos. Por favor, intentar nuevamente
      </div>
    );

  return (
<<<<<<< HEAD
    <div>
      { 
        Object.keys(items).length >0 && 
        Object.keys(items).map((key) => {
          const item= items[key]
          const { img } = item;
          return (
            <div style={noticiasStyle}>
              <CardImageNot img={img}/>
              <CardBodyNot/>                 
            </div>
          )       
      })} 
=======
    <div className= {styles.content} >
        { 
         Object.keys(items).length >0 && 
         Object.keys(items).map((key) => {
                const item= items[key]
                const { _id, img, body, date } = item;
                return (
                    <div className={styles.CardNoticias}>
                        <CardImageNot img={img}/>
                        <CardBodyNot date={date} body={body} />                 
                    </div>
                )       
            }) 
        } 
>>>>>>> 576af445e14ecd74d72196221df368e8abaf2625
    </div>
  )
}

export default CardNoticias
