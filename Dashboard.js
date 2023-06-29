import React,{useState} from 'react'

export default function Dashboard(props) {
    const handleOnChange =(event) => {
        //   console.log("on change");
          setText(event.target.value);
        }
        
        const[text,setText]=useState('');
  return (
    <>
      <div className="container"  style={{color:props.mode==='light'?"black":"white"}}>
     <h1>Enter your work here</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text}   onChange={handleOnChange} id="mybox" rows="10" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='light'?'black':'white'}} placeholder="Ënter Your Text Here!"> <span>"Your text here"</span></textarea>
</div>

    </div> 
    <div className="container my-3" style={{color: props.mode==='light'?"black":"white"}} >
        <h2>Your Summary here </h2>
        

        <p> {`${text[text.length-1]===(" ")}`? `${(text.split(" ").length)-1}  words and ${text.length} characters`:`${text.split(" ").length} words and ${text.length} characters`}</p>
        <p>{text.length>0?`You took ${text.split(" ").length*(0.08)}mins to read the above text`:"0.00 mins"}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
