import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{

        //console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLoClick = ()=>{

      //console.log("UpperCase was clicked");
      let newText = text.toLowerCase();
      setText(newText);

  }

  const handleClearClick = ()=>{

    //console.log("UpperCase was clicked");
    let newText = '';
    setText(newText);

}

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

    const handleOnChange = (event)=>{

        //console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');

  return (
    <>

      <div className='container'>

      <h1>{props.heading}</h1>
      <div className="mb-3">
      {/* <label for="myBox" class="form-label">Example textarea</label> */}
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3">
        <h2>Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>

    
  )
}
