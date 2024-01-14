import React from "react";

import Project from "../components/Project";
import "./Projects.css";

import texts from "../projects_texts";

export default function Projects() {
  //Function generates random number between 0 and 3
  const generateRandNum = () => {
    let num = Math.floor(Math.random() * 3);

    console.log(num);

    return num;
  };

  return (
    <div className="projects">
      <div className="projects-info">
        <h1>Projects</h1>
        <p>
          Allow me to introduce you to a selection of my carefully crafted
          projects, each a testament to my passion and dedication. These
          endeavors not only reflect my technical prowess but also my unwavering
          commitment to pushing boundaries and delivering exceptional results.
          Dive in and explore the fruits of my labor, where innovation meets
          purpose.
        </p>
      </div>
      <div className="projects-list">
        {texts.map((text, index) => {
          return (
            <Project
              id={index}
              num={generateRandNum()}
              title={text.title}
              description={text.description}
              pict={text.img}
              online={text.online}
            />
          );
        })}
      </div>
    </div>
  );
}
