import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }


    const handleClearClick=()=>{
      // console.log("UpperCase was clicked"+ text);
      let newText="";
      setText(newText);
      props.showAlert("Cleared the text!","success");
  }

  const handleConcatClick=()=>{
    // console.log("UpperCase was clicked"+ text);
    let newText=text.concat("Asad");
    setText(newText);
    props.showAlert("Concated Your Name!","success");
}

     const handleLoClick=()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
     }
        

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
}
  const [text, setText] = useState("");
//   setText("New Text");


  return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleConcatClick}>Concat Asad</button>

      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      



    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary:</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes To Read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it!"}</p>
    </div>
    </>
  );
}

TextForm.prototypes = {
  heading: PropTypes.string.isRequired,
};
