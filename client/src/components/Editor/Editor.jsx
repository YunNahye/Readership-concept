import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './tools';
import { createReport } from '../../api/reportAPI';
import { Link, useLocation } from 'react-router-dom';

const Editor = () => {
  const editor = useRef(null);
  const location = useLocation();
  const section = location.state.section;

  const saveHandler = async() => {
    await editor.current.save()
      .then(saveData => {
        createReport(saveData, section);
      });
  };

  useEffect(() => {
    if (editor.current === null) {
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
      <Link to='/study'>
        <SaveBtn onClick={saveHandler}>저 장</SaveBtn>
      </Link>
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