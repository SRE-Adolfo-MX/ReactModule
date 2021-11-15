import { useState } from "react";
// [valor, modificarValor]
const Counter = ({title= 'Sin Fruta'}) => {

  console.log('función ejecutada')

  const [valor, setValor] = useState(0);

  const handleRestar = () => setValor(valor - 1);
  const handleSumar = () => setValor(valor + 1);
  const handleReset = () => setValor(0);

  const colorLabel = valor < 1 ? "red" : valor <= 3 ? "orange" : "green";
  const label = valor<1 ? 'Agotado' : valor
  const restarDisabled = label === 'Agotado'


  return (
    <div>
      <h2>{title}</h2>
      <div>
        <button disabled={restarDisabled} onClick={handleRestar}>-</button>
        <span style={{ color: colorLabel }}>{label}</span>
        <button onClick={handleSumar}>+</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
