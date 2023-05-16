import React, { useState } from "react";

export default function TextForm({ heading, mode, showAlert}) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked", text);

    let newText = text.toUpperCase();
    setText(newText);
    showAlert("converted to upperCase", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    showAlert("converted to lowerCase", "success");
  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log("I am copy")
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ").trim());
    showAlert("removed extra spaces", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: mode === "dark" ? "grey" : "white",
              color: mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Handle Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "#042743" }}
      >
        <h2>your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "enter something in the text box above to preview it here "}
        </p>
      </div>
    </>
  );
}
