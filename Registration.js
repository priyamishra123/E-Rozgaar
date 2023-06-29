import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Registration() {
  return (
    <>
      <div class="btn-group">
      <a class="btn btn-primary" href="/Register" role="button">I am a  Labour</a>
      <a class="btn btn-primary" href="/Registero" role="button">I want to hire a labour</a>
      <NavLink to="/Login_page" >I am already registered</NavLink>
</div>
    </>
  )
}
