import React, { useRef } from "react";

function Reference() {
  let inputRef = useRef(null);
  function handleinput() {
    inputRef.current.value = "100";
    inputRef.current.focus();
  }
  return (
    <>
      <h2>useRef Hook in react js</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleinput}>Handle Input</button>
    </>
  );
}

export default Reference;
