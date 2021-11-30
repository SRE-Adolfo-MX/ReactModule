import React, { useEffect, useState } from "react";
import ConsoleDescription from "./ConsoleDescription";
import ConsoleImage from "./ConsoleImage";
import ConsoleTitle from "./ConsoleTitle";
import styles from "./Console.module.scss";
import Loader from "react-loader-spinner";
import ConsoleGalley from "./ConsoleGalley";

// Console es la CARD

const Console = () => {

  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://nintendo-fddf6-default-rtdb.firebaseio.com/Equipos/.json")
    .then((result) => {
      result.json().then((data) => {
        console.log(data)
        setItems(data)
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

    <div className={styles.content}>
      {Object.keys(items).length >0 &&
      Object.keys(items).map((key) => {
        const item = items[key]
        console.log("item", item)
        const { _id, featureImage, description, name, gallery } = item;
        return (
          <div>
            <div className={styles.contentFlex}>
              <ConsoleTitle key={_id} name={name} />
              <button className={styles.button} style={{cursor: 'pointer'}}>Encuentra proveedores ▷ </button>
            </div>
            <div className={styles.description}>
              <ConsoleImage key={_id} featureImage={featureImage} />
              <ConsoleDescription description={description} />
            </div>
            <ConsoleGalley key={_id} gallery={gallery}/>
          </div>
        )
      })}
    </div>
  );
};

export default Console;
