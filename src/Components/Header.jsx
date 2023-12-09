

import { useState } from "react";
const Header = ({setInputValue}) => {
  
  let searchInput = document.querySelector(".searchInput")
  
  return (
  <div className="Header">
 
  <div className="top">
  <div className="logo">E-Music App</div>
  <input placeholder="search ..."  className="searchInput"
  onChange={(e)=>{setInputValue(e.target.value)}} />
  
  </div>
  </div>
  )
}

export default Header;