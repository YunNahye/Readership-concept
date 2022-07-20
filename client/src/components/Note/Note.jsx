import React from 'react';
import styled from 'styled-components';

const Note = ({ title, date }) => {
  return(
    <NoteDiv></NoteDiv>
  );
};

const NoteDiv = styled.div`
  float: left;
  width: 13%;
  min-width: 160px;
  height: 30%;
  min-height: 180px;
  margin: 3vh;
  background-color: #FFF0ED;
`;

export default Note;