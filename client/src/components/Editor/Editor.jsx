import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './tools';
import { createReport, updateReport } from '../../api/reportAPI';
import { useNavigate, useLocation } from 'react-router-dom';

const Editor = () => {
  const editor = useRef(null);
  const navigator = useNavigate();
  const location = useLocation();
  const section = location.state.section;
  const reportData = location.state.reportData;

  const saveHandler = async() => {
    const saveData = await editor.current.save();
    reportData ?
    await updateReport(reportData.reportId, saveData) :
    await createReport(saveData, section);
    navigator('/study');
  };

  useEffect(() => {
    if (editor.current === null) {
      reportData ?
      editor.current = new EditorJS({
        holder: "editorJS",
        tools: EDITOR_JS_TOOLS,
        data: reportData.content
      }) :
      editor.current = new EditorJS({
        holder: "editorJS",
        tools: EDITOR_JS_TOOLS,
        data: {
          blocks: [
            {
              type: 'header',
              data: {
                text: '제목을 입력하세요',
                level: 1
              }
            },
            {
              type: 'paragraph',
              data: {
                text: ''
              }
            },
            {
              type: 'paragraph',
              data: {
                text: '내용을 입력하세요'
              }
            }
          ]
        }
      })
    }
  }, []);

  return(
    <EditorDiv>
      <div id='editorJS' />
      <SaveBtn onClick={saveHandler}>저 장</SaveBtn>
    </EditorDiv>
  );
};

const EditorDiv = styled.div`
  
`

const SaveBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 24px;
  bottom: 2vh;
  width: 90px;
  height: 40px;
  background-color: #F1CAC1;
  border-radius: 10px;
  color: #BF7E6F;
  padding: 8px 0;
  text-align: center;
  font-size: 16px;
`

export default Editor;