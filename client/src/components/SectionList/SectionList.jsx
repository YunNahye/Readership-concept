import React, { useState } from 'react';
import styled from 'styled-components';

const SectionList = () => {
  const [menuList, setMenuList] = useState(['미분류']);
  const [plusColor, setPlusColor] = useState('#FADCD5');

  const showPlus = () => {
    setPlusColor('#BF7E6F');
  };

  const hidePlus = () => {
    setPlusColor('#FADCD5');
  };

  return(
    <SectionListDiv>
      {menuList.map((menu) => (
        <Section>{menu}</Section>
      ))}
      <Plus onMouseEnter={showPlus} onMouseLeave={hidePlus}>
        <path d="m15 5v20m-10-10h20" stroke={plusColor} stroke-width="2.2" stroke-linecap="round"/>
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

const Section = styled.div`
  cursor: pointer;
  width: 100%;
  height: 2.5vh;
  background-color: #FFF0ED;
  color: #BF7E6F;
  line-height: 2.5vh;
  font-size: 18px;
  padding-left: 2vw;
`

const Plus = styled.svg`
  cursor: pointer;
  float: right;
  margin-top: 6px;
  width: 30px;
  height: 30px;
`

export default SectionList;