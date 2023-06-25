import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom';

export default function Navbar(props) {
    const changeTheme=(event)=>{
    let color = event.target.id;
        props.themeChange(color);
    }

    return (
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode }`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li>
                
            </ul>
            <div className="colors d-flex ">
                <div className="color light-blue" id="blue" onClick={changeTheme}></div>
                <div className="color light-violet" onClick={changeTheme} id="violet"></div>
                <div className="color light-pink" onClick={changeTheme} id="pink"></div>
                <div className="color light-yellow" onClick={changeTheme} id="yellow"></div>
            </div>
            <div className={`form-check form-switch text-${props.theme}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.theme} Mode</label>
            </div>
            </div>
        </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string
};
Navbar.defaultProps = {
    title: 'Set title here'
};