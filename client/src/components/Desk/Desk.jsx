import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getReportListBySection } from '../../api/reportAPI';

const Desk = ({ section }) => {
  const [reportList, setReportList] = useState([]);

  const getReport = async() => {
    const data = await getReportListBySection(section);
    setReportList(data);
    console.log(data);
  };

  useEffect(() => {
    getReport();
  }, [section]);

  return(
    <DeskDiv>
      <Link to='/write' state={{ section: section }}>
        <AddBtn/>
      </Link>
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

const AddBtn = styled.div`
  position: absolute;
  right: 2vw;
  bottom: 3vh;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  background-color: #F1CAC1;
`

export default Desk;