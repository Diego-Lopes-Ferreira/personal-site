import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './editor.css';

export default function TextBlockEditor({ initialData, configuration, onSave }) {
  return (
    <div className="text-block-editor">
      <h1>DEEGO</h1>
      <TextBlockEditable />
    </div>
  );
}

function TextBlockEditable({ initialData, type }) {
  const [editMode, setEditMode] = useState(true);
  const [content, setContent] = useState(initialData);

  if (editMode) {
    return (
      <div onBlur={() => setEditMode(false)} className="editable-wrapper">
        <div className="left">
          <button> + </button>
          <button>move</button>
        </div>
        <div className="content">
          <input value={content} onChange={(el) => setContent(el.target.value)}></input>
        </div>
        <div className="right">
          <button> + </button>
        </div>
      </div>
    );
  } else {
    return (
      <div onClick={() => setEditMode(true)} className="editable-wrapper">
        <div className="left">
          <button> + </button>
          <button>move</button>
        </div>
        <div className="content">
          <ReactMarkdown source={content} />
        </div>
        <div className="right">
          <button> + </button>
        </div>
      </div>

    );
  }
}
