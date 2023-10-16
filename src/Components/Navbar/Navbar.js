import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" >Peak Experiences</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/mybucketlist" >My Bucket List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/activites" >All Activites</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">Submit Activity</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar