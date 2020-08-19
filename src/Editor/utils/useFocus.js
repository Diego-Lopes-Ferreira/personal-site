import React, { useRef } from 'react';

export default function useFocus() {
  // Hook to focus a specifc element
  // Returns a useRef() and a function that focuses the element with that ref
  const htmlElRef = useRef(null)
  function setFocus() {
    htmlElRef.current && htmlElRef.current.focus()
  }
  return [htmlElRef, setFocus];
}
