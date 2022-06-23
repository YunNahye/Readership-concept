import React from 'react';
import styled from 'styled-components';
import Editor from '../Editor';

const Worksheet = () => {
  return(
    <WorksheetDiv>
      <Editor />
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


export default Worksheet;