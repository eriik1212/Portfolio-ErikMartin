import React from 'react'

import "./Header.css";

export default function Header() {
  return (
    <header className='Header'>
        <h1>Welcome to my portfolio</h1>
        <div className='header-links'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </header>
  )
}
