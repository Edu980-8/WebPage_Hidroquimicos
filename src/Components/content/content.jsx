import React from "react";
import Accordion from '../acordion/acordion';
import './content.css'

const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

const content = ({ setShowContent }) => {
  const handleContentMouseEnter = () => {
    setShowContent(true);
  };

  const handleContentMouseLeave = () => {
    setShowContent(false);
  };
  return (
    <div className="content-container-acc" onMouseEnter={handleContentMouseEnter} onMouseLeave={handleContentMouseLeave}>
      <div className="accordion-container">
        {alphabet.map((letter) => (
          <Accordion title={letter}></Accordion>
        ))}
      </div>
    </div>
  );
};

export default content;
