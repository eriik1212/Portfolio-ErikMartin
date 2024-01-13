import React from 'react'

import "./Home.css";
import fotoPerfil from "../assets/profilePict.jpg"
import linkedin from "../assets/linkedin.png";
import github from "../assets/GitHub_Invertocat_Logo.svg"

export default function Home() {
  return (
    <div className='home'>
        <div className='home-texts'>
            <h1>Hi, I'm Erik a <i>videogame designer</i></h1>
            <p>Such a pasionate videogame designer and developer, very excited to start new projects and keep learning and improving my skills</p>
            <div className='texts-img'>
                <a href='https://www.linkedin.com/in/erikmartingarzon/' target='_blank'><img src={linkedin} /></a>
                <a href='https://github.com/eriik1212' target='_blank'><img src={github} /></a>
            </div>
            
        </div>

        <div className='home-img'>
            <img src={fotoPerfil}/>
        </div>
        
    </div>
  )
}
