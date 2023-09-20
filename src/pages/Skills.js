import React from 'react'

import "./Skills.css";

import f4 from "../assets/skills/icons8-audacity-240.png"
import f7 from "../assets/skills/hack.png"
import f1 from "../assets/skills/icons8-c-240.png"
import f6 from "../assets/skills/icons8-figma-480.png"
import f2 from "../assets/skills/icons8-unity-500.png"
import f5 from "../assets/skills/substance-painter.svg"
import f3 from "../assets/skills/maya.png"
import f8 from "../assets/skills/Wwise-Logo-2016-Wwise_R-Color.png"



export default function Skills() {

  const images = [f1,f2,f3, f8,f4,f5,f6,f7,];

  return (
    <div className='skills'>
      <h1>Skills</h1>

      <div className='skills-images'>
        {
          images.map((image,index) => {
            return <img src={image} alt="" key={index} />
          })
        }
      </div>
    </div>
  )
}
