import React, { useState, useEffect } from 'react';

function setInputHeight(element, defaultHeight) {
  if (element) {
    const target = element.target ? element.target : element;
    target.style.height = `${defaultHeight}px`;
    target.style.height = `${target.scrollHeight}px`;
  }
}

export default function FlexTextArea({ value, refere, defaultHeight, handleChange }) {
  const [content, setContent] = useState(value);

  useEffect(() => {
    if (handleChange) {
      handleChange(content)
    }
  }, [content])

  function handleTyping (el) {
    setInputHeight(el, defaultHeight);
    setContent( el.target.value );
  }

  return (
    <textarea onFocus={(el) => setInputHeight(el, defaultHeight)} value={content} ref={refere} onChange={handleTyping}></textarea>
  );
}
