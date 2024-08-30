import React from 'react';

function MediaDisplay({ image, audio }) {
  return (
    <div>
      <img src={image} alt="Imagen relacionada con el verso" />
      <audio controls>
        <source src={audio} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}

export default MediaDisplay;
