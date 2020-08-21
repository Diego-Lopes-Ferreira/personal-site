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
        <ReactQuill
          theme="snow"
          modules={{ toolbar: myToolbarOptions }}
          formats={myFormats}
          value={value}
          onChange={setValue} />
      </div>
    </div>
  );
}

// quill configuration  
var myFormats = [
  'background',
  'bold',
  'color',
  'font',
  'code',
  'italic',
  'link',
  'size',
  'strike',
  'script',
  'underline',
  'blockquote',
  'header',
  'indent',
  'list',
  'align',
  'direction',
  'code-block',
  'Embeds',
  'formula',
  'image',
  'video',
];

var myToolbarOptions = [
  [{ 'header': [1, 2, 3, false] }],
  //[{ 'header': 1 }, { 'header': 2 }],
  ['bold', 'italic', 'underline', 'strike', { 'align': ['', 'right', 'center', 'justify'] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [
    { 'script': 'sub' },
    { 'script': 'super' }, // superscript/subscript
    { 'indent': '-1' },
    { 'indent': '+1' }
  ], // outdent/indent
  //[{ 'direction': 'rtl' }], // text direction
  //[{ 'size': ['small', false, 'large', 'huge'] }],

  ['image', 'link', 'video', 'blockquote', 'code-block'],
  [{ 'font': [] }],
  ['clean']
];

