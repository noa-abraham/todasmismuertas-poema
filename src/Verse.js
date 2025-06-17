import React from 'react';
import './Verse.css'; // Asegúrate de tener el archivo CSS para Verse

<<<<<<< HEAD
function Verse({ text, onClick, style }) {
=======
function Verse({ text, onClick, onTouchStart, style }) {
>>>>>>> 468f2bc (Corrige errores y actualiza proyecto a version movil)
  return (
    <p className="verse" onClick={onClick} style={style}>
      {text}
    </p>
  );
}

export default Verse;
