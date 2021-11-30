import { useEffect, useState } from "react"
import Loader from "react-loader-spinner";




const ConsoleGalley = () => {

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
    <div>
      {Object.keys(items).length >0 &&
      Object.keys(items).map((key) => {
        const item = items[key].gallery
        const { gallery } = item;
        return (
      <div>
        <li><img src={gallery} alt="" /></li>
      </div>
      )
    })}
    </div>
  )
}

export default ConsoleGalley
