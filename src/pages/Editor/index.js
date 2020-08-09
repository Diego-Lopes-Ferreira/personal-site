import React, { useContext, useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import ReactMarkdown from 'react-markdown';

import './index.css';

/*
  * Editor Page
  [ ] Fixed part
    [ ] all functions on buttons
    [ ] n click enters the block on the editor
  [ ] Editor area = half of the screen
  [ ] preview area = other half
*/

export default function EditorPage() {

  return (
    <div className="editor-wrapper">
      <div className="editor">
        <MyEditor />
      </div>
    </div>
  );
}

function MyEditor() {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  return <Editor editorState={editorState} onChange={setEditorState} />
}