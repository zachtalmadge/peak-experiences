import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg container-fluid navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink className="navbar-brand text-warning" to="/" >Peak Experiences</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/activites" >All Activites</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/mybucketlist" >My Bucket List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/activties/submit">Submit Activity</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar