import React from 'react';
import styled from 'styled-components';

const Bookshelf = () => {
  return(
    <>
      <BookshelfDiv></BookshelfDiv>
      <Helper></Helper>
    </>
    
  );
};

const BookshelfDiv = styled.div`
  position: absolute;
  left: 3vw;
  bottom: 5vh;
  width: 15vw;
  height: 83vh;
  background-color: #FADCD5;
  /* border: solid 1px #d8a093; */
  border-radius: 35px;
  &:before {
    background-color: #FADCD5;
    /* border: solid 1px #d8a093; */
    border-radius: 35px;
    content: '';
    position: absolute;
    top: -8vh;
    left: -1px;
    width: 25vw;
    height: 18vh;
  }
`

const Helper = styled.div`
  position: absolute;
  left: 18vw;
  bottom: 74vh;
  width: 2.2vw;
  height: 4vh;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    box-shadow: -50px -50px 0 0 #FADCD5;
  }
`

export default Bookshelf;