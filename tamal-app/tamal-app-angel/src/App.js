import { useState } from 'react';
import "./App.css";
import Card from "./Components/Card/Card";
import fetchItems from "./services/fetchItems";

function App() {
  // const items = fetchItems();
  const [items, setItems] = useState(fetchItems())
  
  return (
    <div className="container-fluid">
      <div className="row">
        {items.map(({ title, imgUrl, text, linkBtn, oferta }) => (
          <Card
            title={title}
            imgUrl={imgUrl}
            text={text}
            linkBtn={linkBtn}
            oferta={oferta}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
