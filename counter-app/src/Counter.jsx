import { useState } from 'react'

const Counter = () => {
   
    const [valor, setValor] = useState(0)

    const handlerRestar = () => setValor(valor-1);

    const handlerSumar = () => setValor(valor+1);

    const handlerReset = () => setValor(0);

    const colorLabel = valor < 1 ? "red" : valor <= 3 ? "orange" : "green";
    const label = valor < 1 ? 'Agotado' : valor;
    const styleRestart = label === "Agotado" ? {display: 'none'} : {};
    const restartDisable = label === 'Agotado'


    return (
        <div>
            <div>
                <button disabled={restartDisable} onClick={handlerRestar}>
                    -
                </button>
                <span style={{color: colorLabel}}>
                   {label}
                </span>
                <button onClick={handlerSumar}>
                    +
                </button>
            </div>
            <button onClick={handlerReset}>
                Reset
            </button>
        </div>
    )
}


export default Counter;