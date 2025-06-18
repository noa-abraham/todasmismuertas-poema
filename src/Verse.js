import React from 'react';
import './Verse.css';

function Verse({ text, onPointerDown, style }) {
  return (
    <p className="verse" onPointerDown={onPointerDown} style={style}>
      {text}
    </p>
  );
}

export default Verse;
