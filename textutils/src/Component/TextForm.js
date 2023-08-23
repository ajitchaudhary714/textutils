import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoclick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearclick = () => {
    console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("");
  // text = "new text"; wrong way to change the this.state.
  // setText("new text");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear Box
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
      Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text Summery</h1>
        <p>
          {text.split(" ").length} word and {text.length}character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
