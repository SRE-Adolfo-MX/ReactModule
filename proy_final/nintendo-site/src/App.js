import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
// import Content from "./Components/Content"
import Juegos from "./Components/Juegos/Juegos"
import Equipos from "./Components/Equipos/Equipos";


function App() {
 
  const [cartItems, setCartItems] = useState({});

  const emptyCart = () => setCartItems({});

  const addToCart = (catalogItem) => {
    const existingItem = cartItems[catalogItem.id];
    if (!existingItem) {
      const cart = {
        ...cartItems,
        [catalogItem.id]: { qty: 1, price: catalogItem.price },
      };
      setCartItems(cart);
    } else {
      const cart = {
        ...cartItems,
        [catalogItem.id]: {
          qty: existingItem.qty + 1,
          price: existingItem.price + catalogItem.price,
        },
      };
      setCartItems(cart);
    }
  };

  const removeFromCart = (catalogItem) => {
    const existingItem = cartItems[catalogItem.id];
    if (existingItem) {
      if (existingItem.qty <= 1) {
        let { [catalogItem.id]: omitir, ...restOfItems } = cartItems;
        setCartItems(restOfItems);
      } else {
        const cart = {
          ...cartItems,
          [catalogItem.id]: {
            qty: existingItem.qty - 1,
            price: existingItem.price - catalogItem.price,
          },
        };
        setCartItems(cart);
      }
    }
  };


  return (
    <div className="container-fluid">
      <div className="row">
          <Navbar  cartItems={cartItems} emptyCart={emptyCart} />
          <Navbar2 />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
            path="/Juegos"
            element={
              <Juegos
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
              } 
            />
            <Route path="/Equipos" element={<Equipos />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
