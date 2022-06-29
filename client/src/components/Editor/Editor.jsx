import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './tools';
import { createReport } from '../../api/reportAPI';

const Editor = ({ section }) => {
  const editor = useRef(null);

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
      <SaveBtn onClick={saveHandler} />
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
  background-color: #D8A093;
  border-radius: 10px;
`

export default Editor;