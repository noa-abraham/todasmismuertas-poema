import React from 'react';
import './Verse.css'; // Asegúrate de tener el archivo CSS para Verse

function Verse({ text, onClick, style }) {
  return (
    <p className="verse" onClick={onClick} style={style}>
      {text}
    </p>
  );
}

export default Verse;
