/**
 * Created by yanggang on 2019/3/10.
 */
import React from 'react'
import {NavLink} from 'react-router-dom'


import './index.css'

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="side">
            <ul className="nav-menu">
                <li>
                    <NavLink className="nav-link" to="/button">Button</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/explorer">Explorer</NavLink>
                </li>
            </ul>
        </div>
    }
}

export default Menu