import React, { useState, useEffect }from 'react'
import fetchItemsIntro from '../Services/fetchItemsIndex'
import Card from './Cards/CardIndex';

const Index = () => {
  const [intros, setIntros]= useState([]);
  
  useEffect(() => {
    setIntros(fetchItemsIntro)

  }, [])

  return (
    <div>
    {intros.map(intro=>{
      const {title,imgUrl,text,linkBtn}= intro
      return <Card 
              title={title} 
              imgUrl={imgUrl} 
              text={text} 
              linkBtn={linkBtn} 
            />
      })}
    </div>
  )
}

export default Index
