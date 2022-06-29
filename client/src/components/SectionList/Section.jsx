import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = ({ title, addSection, removeSection }) => {
  const [editMode, setEditMode] = useState(false);
  const [xColor, setXColor] = useState('#FFF0ED');
  const inputElement = useRef(null);

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
          <CheckMark onClick={add}>
            <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' fill='#D8A093'/>
          </CheckMark>
        </SectionDiv> :
        <SectionDiv>
          {title}
          <DeleteMark viewBox='0 0 20 20' onMouseEnter={showX} onMouseLeave={hideX} onClick={remove}>
            <path stroke={xColor} strokeWidth='2' strokeLinecap='round' d='M8,8 L18,18 M18,8 L8,18'/>
          </DeleteMark>
        </SectionDiv>
      }
    </>
  );
};

const SectionDiv = styled.div`
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
  font-size: 16px;
  font-weight: 600;
  background-color: #FFF0ED;
  :focus {
    outline: none;
  }
`;

const DeleteMark = styled.svg`
  cursor: pointer;
  float: right;
  vertical-align: middle;
  margin-right: 12px;
  width: 22px;
  height: 22px;
`;

const CheckMark = styled.svg`
  cursor: pointer;
  float: right;
  margin-top: 5px;
  margin-right: 12px;
  width: 24px;
  height: 24px;
`;

export default Section;