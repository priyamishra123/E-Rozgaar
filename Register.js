import React, { useState } from "react";
import registrationi from "../Images/registrationi.png";
import Delhi from "../utils/Delhi.json";
import axios from "axios";

// import Login from './Login';
// import { NavLink } from 'react-router-dom';
export default function Register() {
  const [input,setInput]= useState({
      name:"",
      email:"",
      password:"",
      category:"",
      phone:"",

  })

  const handleOnChange=(e)=>setInput({[e.target.name]:[e.target.value]})
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    
    if(!input){
alert("Fill corect details")
return
    }

    const data={
        name:input.name,
      email:input.email,
      password:input.password,
      category:input.category,
      phone:input.phone,
      state:state,
      district:district,
      subDistrict:area
    }

    const res=axios.post("https://demo-ochre-eight.vercel.app/worker/signup",data)
    console.log(res)

  }




  const [state, setState] = useState();
  const [district, setDistrict] = useState("Central Delhi");
  const [area, setArea] = useState();

  return (
    <>
      <section className="signup grid text-center">
        <div className="container mt-20  bg-'black'">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Signup</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account materials-icon-name"></i>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Enter Your Name"
                    onChange={(e)=>handleOnChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email materials-icon-name"></i>
                  </label>
                  <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Enter Your email"
                    onChange={(e)=>handleOnChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">
                    <i class="zmdi zmdi-phone materials-icon-name"></i>
                  </label>
                  <input
                    required
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="off"
                    placeholder="Enter Your phone-number"
                    onChange={(e)=>handleOnChange(e)}
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="adress">
                     <i class="zmdi zmdi-pin-drop"></i>
                  </label>
                </div> */}
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
                  <input
                    required
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Enter Your password"
                    onChange={(e)=>handleOnChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">
                    <i class="zmdi zmdi-lock materials-icon-name"></i>
                  </label>
                  <input
                    required
                    type="text"
                    name="confirm-password"
                    id="confirm-password"
                    autoComplete="off"
                    placeholder="Confirm your password"
                    onChange={(e)=>handleOnChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">
                    <i class="zmdi zmdi-lock materials-icon-name"></i>
                  </label>
                  <select onChange={(e) => setState(e.target.value)}>
                    <option selected>Delhi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="district">
                    <i class="zmdi zmdi-lock materials-icon-name"></i>
                  </label>

                  <select onChange={(e) => setDistrict(e.target.value)}>
                    <option disabled>Select District</option>

                    {Delhi.districts.map((item) => (
                      <option>{item.district}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="sub-district">
                    <i class="zmdi zmdi-lock materials-icon-name"></i>
                  </label>

                  <select onChange={(e) => setArea(e.target.value)}>
                    <option disabled>Select Area</option>
                    {Delhi.districts.map((item) =>
                      item.district === district
                        ? item.subDistricts.map((data) => (
                            <option>{data.subDistrict}</option>
                          ))
                        : null
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Category">
                    <i class="zmdi zmdi-lock materials-icon-name"></i>
                  </label>

                  <select>
                    <option disabled>Select Category</option>
                    <option>Plumber</option>
                    <option>Electric</option>

                    <option>Bike Mechanic</option>
                  </select>
                </div>
                <div className="form-group form-button">
                  <input
                    required
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onChange={(e)=>handleOnChange(e)}
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
  );
}
