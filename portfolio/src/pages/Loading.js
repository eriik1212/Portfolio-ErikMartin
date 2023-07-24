import React, { useEffect, useState } from 'react'

import logo from '../assets/android-chrome-512x512.png';

import "./Loading.css";

export default function Loading() {

    const [title, setTitle] = useState("");
    const titleSentence = "Currently developing...";


    const writtingEffect = (counter) => {
        if (counter < titleSentence.length) {
          setTimeout(() => {
            setTitle((prevTitle) => prevTitle + titleSentence[counter]);
            writtingEffect(counter + 1);
          }, 400);
        }
      };
    
      useEffect(() => {
        writtingEffect(0);
      }, []);

  return (
    <div className='loading'>
        <img src={logo} />
        <div className='loading-text'>
            <h1>{title}</h1>
            <p>
                Come back soon to see the whole portfolio!<br/>
                Contact me with <a href='https://www.linkedin.com/in/erikmartingarzon/' target='_blank'>LinkedIn</a> meenwhile
            </p>
        </div>
    </div>
  )
}
