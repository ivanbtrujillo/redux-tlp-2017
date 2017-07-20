import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import logo from './assets/img/redux-logo.png';

export default (props) => (
    <div className="header">
        <img alt="redux-logo" className="logo" src={logo} />
        <h1 className="headerTitle"> Introducción a Redux </h1>
        <Link to="/" className="customButtonNav" > Contador </Link>
        <Link to="/game-of-thrones"className="customButtonNav"> Game of Thrones </Link>
    </div>
);