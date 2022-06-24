import React, { useState } from 'react';
import styled from 'styled-components';
import Section from './Section';
import { createSection } from '../../api/sectionAPI';

const SectionList = () => {
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

  const addSection = async() => {

  };

  return(
    <SectionListDiv>
      {menuList.map((menu) => (
        <Section key={menu} title={menu} />
      ))}
      <Plus onMouseEnter={showPlus} onMouseLeave={hidePlus} onClick={addMenu}>
        <path d="m15 5v20m-10-10h20" stroke={plusColor} strokeWidth="2.2" strokeLinecap="round"/>
      </Plus>
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
  margin-top: 6px;
  width: 30px;
  height: 30px;
`;

export default SectionList;