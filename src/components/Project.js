import React, { useState } from 'react'

import "./Project.css";

export default function Project({num, title, description, pict, online}) {
  
  const [hidden, setHidden] = useState(true);



  const handleHidden = () =>{
    setHidden(!hidden);
  }
  
  
  return (
    <div className={`project color${num}`} onClick={e => handleHidden()}>
        <h3>{title}</h3>
        <img src={pict}/>
        
        <div className={hidden ? 'hidden' : 'shown'}>
            <p>{description}</p>
            <a href={online} target='_blank'>More information</a>
        </div>
    </div>
  )
}
