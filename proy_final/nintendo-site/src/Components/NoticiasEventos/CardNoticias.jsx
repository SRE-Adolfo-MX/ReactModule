import React from 'react'
import CardImageNot from "./CardImageNot";
import CardBodyNot from "./CardBodyNot";


const CardNoticias = ({img}) => {
    const noticiasStyle= { 
        border: "1px solid gray",
        margin: "5px",
        padding: "15px",
        minWidth: "300px",
        width: "300px",
    }
    const [items, setItems] = useState([]);

     useEffect(() => {

    fetch("https://nintendo-fddf6-default-rtdb.firebaseio.com/Noticias/.json")
      .then((result) =>
        result.json().then((data) => {
         
            setItems(data.body);
          
        })
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));

    
  }, []);

  return (
    <div className={styles.section}>
      {items.map((item) => {
        const { _id, img, body, date } = item;
        


   
    return (
        <div style={noticiasStyle}>
        <CardImageNot img={img}/>
        <CardBodyNot/>

            
        </div>
    )
}

export default CardNoticias
