import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Atoles from "./Atoles";
import Index from "./Index";
import Tamales from "./Tamales";
import ShoppingCar from "./ShoppingCar";
import styles from "./style/CarShopping.module.scss";


const App = () => {
  console.log('Renderizando App')
  return (
    <div>
      <div align="center">
        <ShoppingCar /*qty={totalqty}*//>
        <button /*onClick={onCleanAll}*/>
            Reset
        </button>
      </div>
      <h1>iTamales</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/tamales">Tamales</Link>
        <Link to="/atoles">Atoles</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tamales" element={<Tamales />} />
        <Route path="/atoles" element={<Atoles />} />
      </Routes>
    </div>
  );
};

// const App = () => {
//   const [page, setPage] = useState('inicio')
//   console.log('Página: ', page)

//   return (
//     <div>
//       <nav>
//         <div onClick={()=>setPage('inicio')}>Inicio</div>
//         <div onClick={()=>setPage('tamales')}>Tamales</div>
//         <div onClick={()=>setPage('atoles')}>Atoles</div>
//       </nav>
//       <h1>iTamal</h1>
//       {(page === 'inicio') && <Index />}
//       {(page === 'tamales') && <Tamales />}
//       {(page === 'atoles') && <Atoles />}
//     </div>
//   )
// }

export default App;
