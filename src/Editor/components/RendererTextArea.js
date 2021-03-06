import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import useFocus from '../utils/useFocus';

export default function RendererTextArea({ data, type }) {
  const [content, setContent] = useState(data);
  const [inputRef, setInputFocus] = useFocus(); //Personalized state

  if (!content) {
    setContent('Type here');
  }

  useEffect(() => {
    setContent(data)
  }, [data])


  var mainElement = (<p dangerouslySetInnerHTML={{ __html: content }}></p>)

  switch (type) {
    case 'h1':
      mainElement = (<h1 dangerouslySetInnerHTML={{ __html: content }}></h1>);
      break;
    case 'p':
      mainElement = (<p dangerouslySetInnerHTML={{ __html: content }}></p>);
      break;
  }

  return (
    <div className="editor-render">
      <ReactMarkdown source={content} />
    </div>
  );
}
