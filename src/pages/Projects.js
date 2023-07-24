import React from 'react'

import Project from '../components/Project';
import "./Projects.css";

import texts from '../projects_texts';

export default function Projects() {


  return (
    <div className='projects'>
        {
            texts.map((text, index) => {
                return <Project 
                        title={text.title}
                        description={text.description}
                        pict={text.img}
                        online={text.online}
                    />
            })
        }
    </div>
  )
}
