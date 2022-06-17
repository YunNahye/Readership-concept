import React from 'react';
import { createReactEditorJS } from 'react-editor-js'

const EditorJs = createReactEditorJS()

const Editor = () => {
  return(
    <>
      <EditorJs />
    </>
  );
};

export default Editor;