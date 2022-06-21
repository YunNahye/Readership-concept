import React from 'react';
import styled from 'styled-components';
import Editor from '../Editor';

const Worksheet = () => {
  return(
    <WorksheetDiv>
      <Editor />
      <SaveBtn />
    </WorksheetDiv>
  );
};

const WorksheetDiv = styled.div`
  margin: auto;
  max-width: 1000px;
  height: 100%;
  padding: 3vh 5vw;
  background-color: white;
  overflow-y: scroll;
`;

const SaveBtn = styled.div`
  position: fixed;
  right: 24px;
  bottom: 2vh;
  width: 90px;
  height: 40px;
  background-color: #D8A093;
  border-radius: 10px;
`

export default Worksheet;