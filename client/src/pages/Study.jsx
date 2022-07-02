import React, { useState, useEffect } from 'react';
import Desk from '../components/Desk';
import Bookshelf from '../components/Bookshelf';

const Study = () => {
  const [currentSection, setCurrentSection] = useState(null);

  const changeSection = ( section ) => {
    setCurrentSection(section);
  };

  return(
    <>
      <Bookshelf changeSection={changeSection}></Bookshelf>
      <Desk section={currentSection}></Desk>
    </>
  );
};

export default Study;