import React, { useState, useEffect, useRef } from 'react';
import './editor.css';

import TextBlockEditable from './components/TextBlockEditable';

export default function TextBlockEditor({ initialData, configuration, onSave }) {
  return (
    <div className="text-block-editor">
      <h1>DEEGO</h1>
      <TextBlockEditable />
    </div>
  );
}
