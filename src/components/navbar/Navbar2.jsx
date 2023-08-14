import React, { useState } from 'react'
import "./Navbar2.scss"
const Navbar2 = ({setpg,username}) => {

  
  return (
    <nav class="navbar">
    <div class="logo" onClick={()=>setpg(1)}>Smart Chatt</div>
    
    {/* <!-- NAVIGATION MENU --> */}
    <ul class="nav-links">

      {/* <!-- USING CHECKBOX HACK --> */}
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      {/* <!-- NAVIGATION MENUS --> */}
      <div class="menu">
      {/* <li className='user' onClick={()=>{setpg(4)
        document.getElementById("checkbox_toggle").checked = false;}}><img src={usericon} />Hellow, {username.length>0?username:"User"}</li> */}
        <li >Home</li>
        <li onClick={()=>{
          setpg(0);
        }}>logout</li>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar2