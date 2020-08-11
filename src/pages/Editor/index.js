import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import './index.css';


const editorConfiguration = {
  plugins: [ Essentials, Bold, Italic, Paragraph ],
  toolbar: [ 'bold', 'italic' ]
};


export default function EditorPage() {
  
  return (
    <div className="editor-wrapper">
      <div className="editor">

        <h2>Olha que legal pai</h2>
        <CKEditor
          editor={ ClassicEditor }
          config={ editorConfiguration }
          data="<p>Comece seu texto!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            //console.log({ event, editor, data });
          }}
          //onInit={editor => {console.log('Editor is ready to use!', editor)}}
            // You can store the "editor" and use when it is needed.
          //onBlur={(event, editor) => {console.log('Blur.', editor)}}
          //onFocus={(event, editor) => {console.log('Focus.', editor)}}
        />
      </div>
    </div>
  );
}

/*
    <div className="editor-wrapper">
      <div className="editor">
        <div className="editor-form">
          <label htmlFor="">Título</label>
          <input type="text" />
        </div>
        <div className="editor-form">
          <label htmlFor="">Descrição</label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="editor-form">
          <label htmlFor="">Texto</label>
          <textarea name="" id="" style={{ height: '20rem' }}></textarea>
        </div>
      </div>
    </div> */

/*
  * Editor Page
  [ ] Fixed part
    [ ] all functions on buttons
    [ ] n click enters the block on the editor
  [ ] Editor area = half of the screen
  [ ] preview area = other half
*/