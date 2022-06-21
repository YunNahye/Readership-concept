import React from 'react';
import styled from 'styled-components';
import Worksheet from '../components/Worksheet';

const Write = () => {
  return(
    <WriteDiv>
      <Worksheet />
    </WriteDiv>
  );
};

const WriteDiv = styled.div`
  height: 100%;
  background-color: #FADCD5;
`;

export default Write;