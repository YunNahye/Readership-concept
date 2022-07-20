import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = ({ id, title, addSection, removeSection, changeSection }) => {
  const [editMode, setEditMode] = useState(false);
  const [xColor, setXColor] = useState('#FFF0ED');
  const inputElement = useRef(null);

  const click = () => {
    changeSection(id);
  };

  const add = () => {
    if(inputElement.current.value !== '') {
      addSection(inputElement.current.value);
    }
  };

  const remove = () => {
    removeSection(title);
  };

  const keyPressAdd = (e) => {
    if(e.key === 'Enter') add();
  };

  const showX = () => {
    setXColor('#D8A093');
  };

  const hideX = () => {
    setXColor('#FFF0ED');
  };

  useEffect(() => {
    if(title === '') {
      setEditMode(true);
    };
  }, []);

  useEffect(() => {
    if(editMode === true) {
      inputElement.current.focus();
    }
  }, [editMode]);

  return(
    <>
      {editMode ?
        <SectionDiv>
          <Input ref={inputElement} onKeyDown={keyPressAdd}/>
          <CheckMark viewBox='0 0 25 25' viewPort='0 0 10 10' onClick={add}>
            <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' fill='#D8A093'/>
          </CheckMark>
        </SectionDiv> :
        <SectionDiv>
          <SectionTitle onClick={click}>{title}</SectionTitle>
          <DeleteMark viewBox='0 0 25 25' viewPort='0 0 10 10' onMouseEnter={showX} onMouseLeave={hideX} onClick={remove}>
            <path stroke={xColor} strokeWidth='2' strokeLinecap='round' d='M8,8 L18,18 M18,8 L8,18'/>
          </DeleteMark>
        </SectionDiv>
      }
    </>
  );
};

const SectionDiv = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 4vh;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #FFF0ED;
  color: #BF7E6F;
  line-height: 4vh;
  font-size: 1.9vh;
  font-weight: 600;
  padding-left: 2vw;
`;

const Input = styled.input`
  width: 80%;
  height: 95%;
  border: 0px;
  color: #BF7E6F;
  font-size: 1.9vh;
  font-weight: 600;
  background-color: #FFF0ED;
  :focus {
    outline: none;
  }
`;

const SectionTitle = styled.div`
  width: 100%;
  height: 100%;
`

const DeleteMark = styled.svg`
  cursor: pointer;
  float: right;
  width: 2vh;
  height: 2vh;
`;

const CheckMark = styled.svg`
  cursor: pointer;
  float: right;
  margin-top: 5px;
  margin-right: 12px;
  width: 2vh;
  height: 2vh;
`;

export default Section;