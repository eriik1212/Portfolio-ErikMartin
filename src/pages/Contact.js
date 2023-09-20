import React from 'react';

import './Contact.css';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/GitHub_Invertocat_Logo.svg';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='contact-info'>

        <div className='row-info'>
          <a>
            <img src={mail} alt='' />
          </a>
          <p>erikmarting1200@gmail.com</p>
        </div>

        <div className='row-info'>
          <a href='https://www.linkedin.com/in/erikmartingarzon/' target='_blank' rel='noreferrer'>
            <img src={linkedin} alt='' />
          </a>
          <p>Erik Martín Garzón</p>
        </div>

        <div className='row-info'>
          <a href='https://github.com/eriik1212' target='_blank'>
            <img src={github} alt='' />
          </a>
          <p>eriik1212</p>
        </div>
      </div>
    </div>
  );
}
