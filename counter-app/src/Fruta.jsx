import { useState } from 'react'

const Counter = () => {
   
    const [fruta, setFruta] = useState("Fruta")

    const handlerCambiarFruta = (nomFruta) => setFruta(nomFruta);

    return (
        <div>
            <div>
                <div>
                <span>{fruta}</span>
                </div>

                <button onClick={() => handlerCambiarFruta('Pera')}>
                    Pera
                </button>
                <button onClick={() => handlerCambiarFruta('Manzana')}>
                    Manzana
                </button>
                <button onClick={() => handlerCambiarFruta('Sandia')}>
                    Sandia
                </button>
            </div>
        </div>
    )
}


export default Counter;