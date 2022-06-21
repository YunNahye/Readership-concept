import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

const Editor = () => {
  const editor = useRef(null);

  useEffect(() => {
    if (editor.current === null) {
      editor.current = new EditorJS({
        holder: "editorJS",
        tools: {
          header: {
            class: Header,
            inlineToolbar: ["link"]
          },
          list: {
            class: List,
            inlineToolbar: true
          },
          embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
              services: {
                youtube: true,
                coub: true
              }
            }
          }
        }
      })
    }
  }, []);

  return(
    <div id='editorJS'></div>
  );
};

export default Editor;