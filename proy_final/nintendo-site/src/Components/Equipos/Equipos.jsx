import React from 'react'
import Console from './Console'

const Equipos = ({ _id, name, featureImage, description }) => {
  return (
    <div>
      <h1 style={{display:'flex', justifyContent:'center', color: '#484848'}}>Elije tu consola Nintendo Switch™️</h1>
      <Console
        // name={name} 
        // featureImage={featureImage}
        // description={description}
        // key={_id}
      />
    </div>
  )
}

export default Equipos
