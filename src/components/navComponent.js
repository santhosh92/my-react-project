import React from 'react';
import { NavLink } from 'react-router-dom';

const navComponent = () => {
    return(
        <ul>
            <li>
                <NavLink to="/home" activeStyle={
                    { color:'green' }
                }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/About" activeStyle={
                    { color:'green' }
                }>About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeStyle={
                    { color:'green' }
                }>Contact</NavLink>
            </li>
        </ul>
    );
}

export default navComponent;