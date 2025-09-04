import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';npm install --save gh-pages
 

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.titles}</Link> */}
        <a className="navbar-brand" href="#">{props.titles}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link> */}
              <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.AboutText}</Link>
            </li> */}
          </ul>

          <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
  )
}




Navbar.propTypes = {
  titles: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  btn: PropTypes.string,
  blog: PropTypes.string
};
