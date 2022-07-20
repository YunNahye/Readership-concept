import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getReportListBySection } from '../../api/reportAPI';
import Note from '../Note';

const Desk = ({ section }) => {
  const [reportList, setReportList] = useState([]);

  const getReport = async() => {
    const data = await getReportListBySection(section);
    setReportList(data);
  };

  useEffect(() => {
    getReport();
  }, [section]);

  return(
    <DeskDiv>
      <NoteArea>
        {reportList && reportList.map((report) => (
          <Note key={report.reportId} title={report.title}></Note>
        ))}
      </NoteArea>
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

const NoteArea = styled.div`
  width: 90%;
  height: 100%;
  margin: 3vh auto;
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