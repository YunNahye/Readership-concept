import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Section from './Section';
import { createSection, getSectionList, deleteSection } from '../../api/sectionAPI';

const SectionList = ({ changeSection }) => {
  const [menuList, setMenuList] = useState(['미분류']);
  const [plusColor, setPlusColor] = useState('#FADCD5');

  const showPlus = () => {
    setPlusColor('#BF7E6F');
  };

  const hidePlus = () => {
    setPlusColor('#FADCD5');
  };

  const addMenu = () => {
    setMenuList(['', ...menuList]);
  };

  const addSection = async( name ) => {
    const newMenuList = [...menuList];
    hidePlus();
    newMenuList[0] = name;
    setMenuList(newMenuList);
    await createSection(name);
  };

  const removeSection = async( name ) => {
    const newMenuList = menuList.filter((item) => { return item !== name });
    setMenuList(newMenuList);
    await deleteSection(name);
  }

  useEffect(() => {
    getSectionList()
      .then(data => {
        changeSection(data[0][1]);
        setMenuList([...data, ['미분류', null]]);
      });
  }, []);

  return(
    <SectionListDiv>
      {menuList.map((menu) => (
        <Section key={menu[1]} id={menu[1]} title={menu[0]} changeSection={changeSection} addSection={addSection} removeSection={removeSection} />
      ))}
      {menuList[0] && 
        <Plus onMouseEnter={showPlus} onMouseLeave={hidePlus} onClick={addMenu}>
          <path d="m15 5v20m-10-10h20" stroke={plusColor} strokeWidth="2.2" strokeLinecap="round"/>
        </Plus>
      }
    </SectionListDiv>
  );
};

const SectionListDiv = styled.div`
  position: absolute;
  bottom: 2vh;
  left: 1vw;
  width: 13vw;
  height: 60vh;
`;

const Plus = styled.svg`
  cursor: pointer;
  float: right;
  margin-top: 0.3vh;
  width: 28px;
  height: 28px;
`;

export default SectionList;