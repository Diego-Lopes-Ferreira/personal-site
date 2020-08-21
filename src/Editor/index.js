import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css';

export default function TextBlockEditor({ initialData, configuration, onSave }) {
  const [value, setValue] = useState('');
  return (
    <div className="editor-page">
      <h1>DEEGO</h1>
      <div className="editor-wrapper">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
}
