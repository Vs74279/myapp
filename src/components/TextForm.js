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
    const [text,setText] =useState("Enter text hare");

  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
     
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
    </div>
  )
}
