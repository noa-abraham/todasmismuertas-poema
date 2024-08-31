import React, { useState, useRef } from 'react';
import Verse from './Verse';
import MediaDisplay from './MediaDisplay';
import './PoemContainer.css';

// Asegúrate de que estas rutas sean correctas
import imagen1 from './assets/imagen1.JPG';
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import imagen4 from './assets/imagen4.jpg';
import imagen5 from './assets/imagen5.jpg';



const poemData = [
  {
    text: "En este país a las poetas se las lee llegadas a muertas",
    image: imagen1,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "quiero decir con los achaques de los años y esa dificultad para respirar",
    image: imagen2,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "o un golpe en la cadera o una enfermedad terminal o incluso",
    image: imagen3,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "bajo tierra-enterradas o por el aire- como ceniza, incineradas",
    image: imagen4,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "y con más de 300 poemas escritos",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "si es que están reunidos y son insistidos por alguna editorial",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "o con 300 papeles arrugados mudados varias veces",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "perdidos, arruinados y salvados",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "con todo eso da igual",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "con un departamento en el centro o una casita en el interior",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "o un cuarto de pensión",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "de las que triunfan: solo leídos los versos llamados de amor",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "pero de la guerra no porque miren,",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "los versos violentos no están permitidos en los feudos de las letras para las poetas",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "porque incluso, razono, pienso, pregunto",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "las que gritaron que no se querían ni blancas ni níveas",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "a esas también las endulzaron",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "les dieron su festival",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "les dieron su reivindicación",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "y para peor escondieron en su obra santificada su obra verdadera",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "Pero las poetas no necesitan las fiestas patrias",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "ni de los feudos ser las vírgenes adoradas",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "las poetas no nos necesitan",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "por qué de qué otra forma hicieron sus obras",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "sino dándonos la espalda",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "pero no en posición obligada",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "sino como ataque",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "a lo atacado.",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "En este país de Ocampos y Pizarnik y Storni",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "pará la cuenta acá",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "las poetas siempre son del siglo anterior-que se entienda, cualquiera que sea el siglo anterior-",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "a veces una entrevista perdida",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "una nota discreta a pie de página",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "un obituario chiquito y sentido",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "un titular que dice: “murió fulanita, la poeta de una generación”",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "entonces anoto los nombres",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "anoto los poemas de las poetas que los programas de universidades, la crítica literaria oficial y el ministerio de la Literatura decidieron borrar, ignorar.",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "Las reúno para mí y para la poesía.",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "Y las revivo en cada poema que les leo",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "porque a las poetas, sobretodo, hay que leerle los poemas.",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "En lo posible publicárselos.",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  },
  {
    text: "Y leerlas como poetas.",
    image: imagen5,
    audio: require('./assets/poetasamuertas.mp3')
  }
];

function PoemContainer() {
  const [activeVerse, setActiveVerse] = useState(null);
  const activeAudios = useRef([]); // Asegúrate de declarar `activeAudios` aquí

  const handleVerseClick = (verseIndex) => {
    setActiveVerse(verseIndex);

    // Crear un nuevo elemento de audio y reproducirlo
    const newAudio = new Audio(poemData[verseIndex].audio);
    newAudio.play();

    // Guardar el audio activo en el arreglo de referencias
    activeAudios.current.push(newAudio);
  };

  

  const handleOverlayClick = () => {
    setActiveVerse(null); // Cierra el overlay
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // Evita que el clic en la imagen cierre el overlay
    handleOverlayClick(); // Cierra el overlay al hacer clic en la imagen
  };

  // Repetir el poema para llenar la pantalla
  const repeatedVerses = Array(10).fill(poemData).flat();

  return (
    <div className={`poem-container ${activeVerse !== null ? 'poem-active' : ''}`}>
      {repeatedVerses.map((verse, index) => {
        const randomX = Math.random();
        const randomY = Math.random();
        return (
          <Verse
            key={index}
            text={verse.text}
            onClick={() => handleVerseClick(index % poemData.length)}
            style={{
              transform: `translate(${randomX * 100}vw, ${randomY * 100}vh)`
            }}
          />
        );
      })}
      {activeVerse !== null && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <p className="overlay-text">{poemData[activeVerse].text}</p>  
         
          </div>
        </div>
      )}
    </div>
  );
}

export default PoemContainer;