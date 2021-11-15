import './App.css';
import Card from './cards';
import React from 'react';
import fetchItems from "./services/fechItems.js";

function App() {
  const items = fetchItems();
  return (
    <div className="container-fluid">
      <div className="row">
      {items.map(({ IMAGE, TEXT, TEXT2, text, type, className, url }) => (
          <Card
            IMAGE={IMAGE}
            TEXT={TEXT}
            TEXT2={TEXT2}
            text={text}
            type={type}
            className={className}
            url={url}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
