import React ,{useState} from 'react'

export default function TextHtmlForm(props) {

    const [text,setText] = useState("")
    const OnchangeUpdate = (event)=>{
        setText(event.target.value);
    }
    const updateToUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success","Changed to Upper Case");
    }
    const updateToLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","Changed to Lower Case");
    }
    const handleClearText = ()=>{
        setText("");
        props.showAlert("success","Cleared");
    }
    
  return (
    <>
   
        <div className='container textform'>
            <h1>{props.heading}</h1>
                <div className="container mb-3 ">
                    <textarea className="HtmlForm-control" value={text} onChange={OnchangeUpdate} style={props.style} id="exampleHtmlFormControlTextarea1" rows="10"></textarea>
                    <button disabled={text.length===0} className='btn btn-primary me-2' onClick={updateToUpperCase}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className='btn btn-primary' onClick={updateToLowerCase}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className='btn btn-dark mx-4' onClick={handleClearText}>Clear</button>
                </div>
                <div className="container">
                    <h2>Text Summary</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.005*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read</p>
                    <p>line count: {text.split("\n").length}</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
        </div>
    </>
  )
}
