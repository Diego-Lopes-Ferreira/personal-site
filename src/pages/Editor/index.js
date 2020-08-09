import React, { useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import './index.css';
import EditorContext from './markdown-context'

/*
  * Editor Page
  [ ] Fixed part
    [ ] all functions on buttons
    [ ] n click enters the block on the editor
  [ ] Editor area = half of the screen
  [ ] preview area = other half
*/

export default function EditorPage() {
  const [markdownText, setMarkdownText] = useState("");

  const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  const contextValue = {
    markdownText,
    setMarkdownText
  };
  return (
    <div className="editor-wrapper">
      <div className="editor">

      </div>
    </div>
  );
}
