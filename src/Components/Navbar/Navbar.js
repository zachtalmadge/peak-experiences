import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Peak Experiences</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">My Bucket List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">All Activites</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Submit Activity</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar