import React from 'react';
import styled from 'styled-components';

const Desk = () => {
  return(
    <DeskDiv>

    </DeskDiv>
  )
};

const DeskDiv = styled.div`
  position: absolute;
  right: 10vw;
  bottom: 5vh;
  width: 70vw;
  height: 70vh;
  border: solid 1px #d8a093;
  border-radius: 35px;
`;

export default Desk;