import React from 'react';
import styled from 'styled-components';

const Note = ({ title, date }) => {
  return(
    <NoteDiv>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </NoteDiv>
  );
};

const NoteDiv = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  float: left;
  width: 13%;
  min-width: 160px;
  height: 30%;
  min-height: 180px;
  margin: 3vh;
  background-color: #FFF0ED;
`;

const Title = styled.div`
  padding: 20px;
  font-size: 1vw;
`;

const Date = styled.div`
  padding: 20px;
`;

export default Note;