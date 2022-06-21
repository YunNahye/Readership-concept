import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './tools';

const Editor = () => {
  const editor = useRef(null);

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
    <div id='editorJS'></div>
  );
};

export default Editor;