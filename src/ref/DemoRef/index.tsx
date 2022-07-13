import React, { useEffect, useRef } from 'react';

function DemoRef() {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>Demo ref with input</h3>

      <input ref={inputRef} type="text" />
    </div>
  )
}

export default DemoRef;