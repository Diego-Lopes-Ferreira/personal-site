import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

function useFocus() {
  // Hook to focus a specifc element
  // Returns a useRef() and a function that focuses the element with that ref
  const htmlElRef = useRef(null)
  function setFocus() {
    htmlElRef.current && htmlElRef.current.focus()
  }
  return [htmlElRef, setFocus];
}

export default function TextBlockEditable({ initialData, type }) {
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
      <div onBlur={() => setEditMode(false)} className="editable-wrapper">
        <LeftSide />
        <div className="content">
          <input value={content} ref={inputRef} onChange={(el) => setContent(el.target.value)}></input>
        </div>
      <RightSide />
      </div>
    );
  } else {
    return (
      <div onClick={() => setEditMode(true)} className="editable-wrapper">
        <LeftSide />
        <div className="content">
          <ReactMarkdown source={content} />
        </div>
        <RightSide />
      </div>

    );
  }
}
