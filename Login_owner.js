import React from 'react'
// import Register from './Register'
import logini from "../Images/logini.png"
import { NavLink } from 'react-router-dom';
export default function Login_owner(props) {
    
  return (
    <>
    
    <section className={`sign-in grid text-center bg-"white"`}  >
        <div className={`containerl mt-20 bg-"white" `} >
        <div className="signin-c ">
                        <div className={`signin `}>
                        <figure>
                            <img src={logini} alt="Login" />
                        </figure>
                        
                        </div>
                    </div>  
            <div className={`signin-content`}>
                <div className={`signin-form `}>
                    <h2 className="form-title">signin</h2>
                    <form className='register-form' id='register-form'>
                        <div className="form-group">
                            <label htmlFor="name">
                            <i class="zmdi zmdi-account materials-icon-name"></i>
                            </label>
                            <input required type="text" name='name' id='name' autoComplete='off' placeholder='Your Name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email materials-icon-name"></i>
                            </label>
                            <input required type="text" name='email' id='email' autoComplete='off' placeholder='Your email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock materials-icon-name"></i>
                            </label>
                            <input required type="text" name='password' id='password' autoComplete='off' placeholder='Your password'/>
                        </div>
                        <div className="form-group form-button">
                            <input  type="submit" name='signin' id='signin' className='form-submit' value="Login" href="/Dashboard_labour"
                             />
                        </div>
                    </form>
                       
                    </div>
                   
            </div>
            <NavLink to="/Registration" >Register Yourself</NavLink>
        </div>
        
    </section>
 
    </>
  )
}
