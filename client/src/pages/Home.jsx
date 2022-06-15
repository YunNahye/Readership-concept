import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return(
    <HomeDiv>
      <ColorBlock></ColorBlock>
      <div>
        <Link to='/study'>
          <Button>서재로 가기</Button>
        </Link>
      </div>
    </HomeDiv>
  )
};

const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: 35vw 65vw;
`;

const ColorBlock = styled.div`
  display: inline-block;
  background-color: #d8a093;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  right: 3vw;
  bottom: 4vh;
  width: 150px;
  height: 60px;
  background-color: #d8a093;
  color: #79534b;
  border: none;
  border-radius: 10px;
  padding: 0px 10px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 8px 5px 10px;
`;

export default Home;