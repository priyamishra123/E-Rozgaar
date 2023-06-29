import React from 'react'
import registrationi from "../Images/registrationi.png";
export default function Registero() {
  return (
    <>
    <section className='signup grid text-center'  >
        <div className="container mt-20  bg-'black'" >
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className='form-title'>Signup</h2>
                    <form className='register-form' id='register-form'>
                        <div className="form-group">
                            <label htmlFor="name">
                            <i class="zmdi zmdi-account materials-icon-name"></i>
                            </label>
                            <input required type="text" name='name' id='name' autoComplete='off' placeholder='Enter Your Name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email materials-icon-name"></i>
                            </label>
                            <input required type="text" name='email' id='email' autoComplete='off' placeholder='Enter Your email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-number">
                            <i class="zmdi zmdi-phone materials-icon-name"></i>
                            </label>
                            <input required type="text" name='phone-number' id='phone-number' autoComplete='off' placeholder='Enter Your phone-number'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="adress">
                            <i class="zmdi zmdi-pin-drop"></i>
                            </label>
                            <input  required type="text" name='adress' id='adress' autoComplete='off' placeholder='Enter Your address'/>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="position">
                            <i class="zmdi zmdi-slideshow materials-icon-name"></i>
                            Your Position:
                            <select id="cars">
                            <option value="Choose here"> Choose here</option>
                                <option value="Labour">I am a Labour</option>
                                <option value="Hirer">I want a Labour</option>
                                
                                // {/* <option value="audi">Audi</option> */}
                            {/* </select>
                            </label>
                            
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock materials-icon-name"></i>
                            </label>
                            <input required type="text" name='password' id='password' autoComplete='off' placeholder='Enter Your password'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">
                            <i class="zmdi zmdi-lock materials-icon-name"></i>
                            </label>
                            <input required type="text" name='confirm-password' id='confirm-password' autoComplete='off' placeholder='Confirm your password'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">
                            <i class="zmdi zmdi-lock materials-icon-name"></i>
                            </label>
                            <input required type="text" name='state' id='state' autoComplete='off' placeholder='Enter Your state'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">
                            <i class="zmdi zmdi-lock materials-icon-name"></i>
                            </label>
                            <input required type="text" name='district' id='district' autoComplete='off' placeholder='Enter your district'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sub-district">
                            <i class="zmdi zmdi-lock materials-icon-name"></i>
                            </label>
                            <input required type="text" name='sub-district' id='sub-district' autoComplete='off' placeholder='Enter your sub district'/>
                        </div>
                        <div className="form-group form-button">
                            <input required type="submit" name='signup' id='signup' className='form-submit' value="register"
                             />
                        </div>
                    </form>
                    </div>
                    <div className="signup-content">
                        <div className="signup-nav">
                        <figure>
                            <img src={registrationi} alt="registration" />
                        </figure>
                        {/* <NavLink to="/Login" >I am already registered</NavLink> */}
                        </div>
                    </div>  
            </div>
           
        </div>
        
    </section>
      
    </>
  )
}
