import React from 'react'

export default function Login_page() {
  return (
    <>
      <div class="btn-group">
      <a class="btn btn-primary" href="/Login" role="button" onClick="location.href='Login.html'">Labour Login</a>
      <a class="btn btn-primary" href="/Login_owner" role="button">Hirer Login</a>
      {/* <NavLink to="/Login" >I am already registered</NavLink> */}
</div>
    </>
  )
}
