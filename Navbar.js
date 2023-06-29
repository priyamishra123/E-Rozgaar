import React from "react";
export default function Navbar(props) {
    // let mystyle={
    //     backgroundColor:'black'
    // }
return(
    <>
    <nav className={` navbar navbar-expand-lg navbar-${props.mode} style-${{color:props.mode==='light'?'black':'white'}} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">E-Labour Chowk</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" my-3>
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        
        <li className="nav-item" my-3>
          <a className="nav-link" href="/helpdesk">HelpDesk</a>
        </li>
        
       
        <li>
        <a type="button" className="nav-link btn btn-primary mx-3" href="/Registration" >Register Yourself</a>
</li>
<li>
<a type="button" className="nav-link btn btn-primary mx-3"  href="/Login_page">Login</a>
</li>

      </ul>
<button type="button" className="btn btn-primary" onClick={props.toggleMode}>Enable {props.mode==='dark'?'light':'dark'} mode</button>

    </div>
  </div>
</nav>
</>
)
  
}
