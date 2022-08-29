import React from 'react'
import { Link } from 'react-router-dom'

function Header({setIsLoggedIn}) {
  
  function clickLogout(){
    setIsLoggedIn(false)
  }
  
  return (
    <nav>
        <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to ="/contact">Contact </Link></li>
        </ul>
        <button onClick={clickLogout}>Logout</button>
    </nav>
  )
}

export default Header