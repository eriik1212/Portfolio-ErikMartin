import React from 'react'

import "./Project.css";

export default function Project({title, description, pict, online}) {
  return (
    <div className='project'>
        <img src={pict}/>
        <h3>{title}</h3>
        <div className='shown'>
            <p>{description}</p>
            <a href={online} target='_blank'>More information</a>
        </div>
    </div>
  )
}
