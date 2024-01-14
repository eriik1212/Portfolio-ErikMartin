import React, { useState } from "react";

import "./Project.css";

export default function Project({ id, num, title, description, pict, online }) {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    const video = document.getElementById(`video${id}`);

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setHidden(!hidden);
  };

  return (
    <div className={`project color${num}`}>
      <h3>{title}</h3>
      <video id={`video${id}`} muted loop onClick={(e) => handleHidden(id)}>
        <source src={pict} type="video/mp4" />
      </video>

      <div className={hidden ? "hidden" : "shown"}>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <a href={online} target="_blank">
          More information
        </a>
      </div>
    </div>
  );
}
