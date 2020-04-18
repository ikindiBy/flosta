import React from 'react';
import { NavLink } from "react-router-dom";

import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="nav-list">
            <li><NavLink activeClassName='active' exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
            {/* <li><NavLink activeClassName="active" to="/calendar">Calendar</NavLink></li>
            <li><NavLink activeClassName="active" to="/services">Services</NavLink></li> */}
            <li><NavLink activeClassName="active" to="/shop">Shop</NavLink></li>
            <li><NavLink activeClassName="active" to="/basket">Basket</NavLink></li>
          </ul>
        </div>
    )
};

export default Navigation;