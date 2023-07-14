import React from 'react'
import  { useState } from 'react';
import Codenotes from './Codenotes';
import Sectionnotes from './Sectionnotes';
import Chapternotes from './Chapternotes';
import"../styles/Tabeffect.css"

const Tabeffect = () => {
 const [activeSlide, setActiveSlide] = useState(null);

  // Function to handle slide click
  const handleSlideClick = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className="container">
    
      <div className="slides">
        <div
          className={`slide ${activeSlide === 0 ? 'active' : ''}`}
          onClick={() => handleSlideClick(0)}
        >
          <a href="#">Code notes</a>
          <div className="content">
          <Codenotes/>
          </div>
        </div>

        <div
          className={`slide ${activeSlide === 1 ? 'active' : ''}`}
          onClick={() => handleSlideClick(1)}
        >
          <a href="#">section notes</a>
          <div className="content">
           <Sectionnotes/>
          </div>
        </div>

        <div
          className={`slide ${activeSlide === 2 ? 'active' : ''}`}
          onClick={() => handleSlideClick(2)}
        >
          <a href="#">chapter notes</a>
          <div className="content">
           <Chapternotes/>
          </div>
              </div>
         <div
          className={`slide ${activeSlide === 3 ? 'active' : ''}`}
          onClick={() => handleSlideClick(3)}
        >
          <a href="#">chapter Guidelines</a>
          <div className="content">
      No guidelines avilable.
          </div>
              </div>
              
      </div>
    </div>
  );
}

export default Tabeffect;
