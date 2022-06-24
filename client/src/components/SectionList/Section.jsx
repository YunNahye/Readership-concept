import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = ({ title }) => {
  const [name, setName] = useState(title);
  const [editMode, setEditMode] = useState(false);
  const inputElement = useRef(null);

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
    <SectionDiv>
      {editMode ?
        <>
          <Input ref={inputElement}/>
          <CheckMark><path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' fill='#BF7E6F'/></CheckMark>
        </> :
        [name]
      }
    </SectionDiv>
  );
};

const SectionDiv = styled.div`
  cursor: pointer;
  width: 100%;
  height: 2.5vh;
  margin-bottom: 10px;
  background-color: #FFF0ED;
  color: #BF7E6F;
  line-height: 2.5vh;
  font-size: 18px;
  padding-left: 2vw;
`;

const Input = styled.input`
  width: 80%;
  height: 95%;
  border: 0px;
  color: #BF7E6F;
  font-size: 18px;
  background-color: #FFF0ED;
  :focus {
    outline: none;
  }
`;

const CheckMark = styled.svg`
  cursor: pointer;
  float: right;
  margin-top: 0.3vh;
  margin-right: 12px;
  width: 24px;
  height: 24px;
`;

export default Section;