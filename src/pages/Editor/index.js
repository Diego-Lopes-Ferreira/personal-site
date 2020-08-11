import React, { useState } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './editor-config';
import './index.css';

export default function EditorPage() {

  const data = {
    time: 1556098174501,
    blocks: [{ type: "header", data: { text: "Editor.js", level: 2 } }]
  };

  return (
    <div className="editor-wrapper">
      <div className="editor">
        <EditorJs tools={EDITOR_JS_TOOLS} data={data} />
      </div>
    </div>
  );
}

/*
  * Editor Page
  [ ] Fixed part
    [ ] all functions on buttons
    [ ] n click enters the block on the editor
  [ ] Editor area = half of the screen
  [ ] preview area = other half
*/