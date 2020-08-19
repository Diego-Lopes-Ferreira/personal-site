import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import useFocus from '../utils/useFocus';

import FlexTextArea from '../components/FlexTextArea';
import RendererTextArea from '../components/RendererTextArea';

export default function TextBlockEditable({ initialData, type='p' }) {
  const [editMode, setEditMode] = useState(true);
  const [content, setContent] = useState(initialData);
  const [inputRef, setInputFocus] = useFocus(); //Personalized state
  useEffect(() => {
    setInputFocus();
  }, [editMode])
  function LeftSide() {
    return (
      <div className="left">
        <button> + </button>
        <button>move</button>
      </div>
    );
  }
  function RightSide() {
    return (
      <div className="right">
        <button> + </button>
      </div>
    );
  }

  if (editMode) {
    return (
      <div onBlur={() => { setEditMode(false) }} className="editable-wrapper">
        <LeftSide />
        <div className="content">
          <FlexTextArea value={content} refere={inputRef} handleChange={text => setContent(text)} />
        </div>
        <RightSide />
      </div>
    );
  } else {
    return (
      <div onClick={() => setEditMode(true)} className="editable-wrapper">
        <LeftSide />
        <div className="content">
          <RendererTextArea data={content} type={type} />
        </div>
        <RightSide />
      </div>

    );
  }
}
