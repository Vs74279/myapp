import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
          console.log("uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText)

    }
    const handleOnChange =(Event)=>{
          console.log("On change");
          setText(Event.target.value);

    }
    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }
    const [text,setText] =useState("");

  return (
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
     
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
      </div>
      <button my-3 className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
      <button my-3  className='btn btn-primary' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <h2>your text summery</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    
  )
}
