import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowerClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lowercase","success");

    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText); 
        props.showAlert("Text Cleared!","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("AI generated!","successfully");

      }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces!","success");

    }

    const[text, setText] = useState("Enter text here");
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state

    return (
        <>
        {/* it is for rendering */}
         <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
             <h1 >{props.heading}</h1>
             <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', 
             color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
             </div>
 
             <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to uppercase</button>
             <button className="btn btn-primary mx-1" onClick={handleLowerClick} >Convert to lowercase</button>
             <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear text</button>
             <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
             <button type="submit" onClick={speak} className="btn btn-warning mx-1 my-2">Speak</button>
         </div>
         <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
             <h2>Your text summary</h2>
             <p>{text.split(" ").length} words and {text.length} characters</p>
             <p>{0.008 * text.split(" ").length} Minutes read</p>
             <h2>Preview</h2>
             <p>{text}</p>
         </div>
         </> 
    )
}