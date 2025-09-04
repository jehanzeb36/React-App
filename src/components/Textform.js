    import React, {useState} from 'react'

    export default function Textform(props) {
        const handleUpClick = ()=>{
            // console.log("Uppercase was clicked" + text);
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to uppercase", "success");
        }

        const handleLowClick = ()=>{
            // console.log("Lowercase was clicked" + text);
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to Lowercase", "success");

        }

        const handleResetClick = () => {
            setText(originalText); // text wapas original form me aa jata hai
            props.showAlert("Your text is reset into original form", "success");

        }

        const handleClearClick = ()=>{
          let newText = '';
          setText(newText)
          props.showAlert("Clear", "success");

        }

        const handleReverseClick = ()=>{
          let newText = text.split('').reverse().join('');
          setText(newText);
        props.showAlert("Your text Reverse", "success");

    }

    const handlecopy = () =>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
    }

      const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
      }
        const handleOnChange = (event)=>{
            console.log("On Change");
            setText(event.target.value);   // <-- Yeh zaroori hai
            setOriginalText(event.target.value);
        }


        const [originalText, setOriginalText] = useState('');
        const [text, setText] = useState('');
      return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#07073f'}}>
            <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#07073f'}} id="mybox" value={text} rows="8" placeholder='Type or Paste'></textarea>
            </div>

            <button className='btn btn-primary mx-2' onClick={handleResetClick}>Reset Original</button>

            <button className='btn btn-primary mx-2' onClick={handleUpClick}>UPPERCASE</button>

            <button className='btn btn-success mx-2' onClick={handleLowClick}>lower case</button>

            <button className='btn btn-success mx-2' onClick={handleReverseClick}>Reverse Text</button>

            <button className='btn btn-success mx-2' onClick={handlecopy}>Copy Text</button>

            <button className='btn btn-secondary mx-2' onClick={handleClearClick}>Clear Text</button>

            <button className='btn btn-secondary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            
          </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#07073f'}}>
            <h1>Your text summary</h1>
            <p>{text.trim().split(/\s+/).filter(word => word.length !== 0).length} words and {text.replace(/\s+/g, "").length} characters</p>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
            <p>{(0.008 * text.split(/\s+/).filter(word => word.length !== 0).length).toFixed(2)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
        </div>
        </>
        
      )
    }
