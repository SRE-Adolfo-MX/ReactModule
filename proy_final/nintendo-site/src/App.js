import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Content from "./Components/Content"


function App() {
 
  return (
    <div className="container-fluid">
      <div className="row">
          <Navbar  />
          <Navbar2 />
          <Content />
          <Routes>
              <Route path="/Home" element={<Home />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
