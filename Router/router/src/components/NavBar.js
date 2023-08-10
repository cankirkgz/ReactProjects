import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav className='mainNav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutUs">About</NavLink>
            <NavLink to="/history">History</NavLink>
        </nav>
    </div>
  )
}

export default NavBar