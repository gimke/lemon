import React from "react";

import TopMenu from "../components/topmenu";
import SideMenu from "../components/sidemenu";
import "../../src/menu/style";
import {Menu} from "../../src";
import "./app.css";
import {NavLink} from 'react-router-dom'

import Buttons from "./buttons";

class App extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <TopMenu />

            <div className="main-wrapper">
                <Menu type="vertical">
                    <Menu.Item>
                        <NavLink to="/button">Button</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/input">Input</NavLink>
                    </Menu.Item>
                </Menu>
                <div className="content">
                    <Buttons />
                </div>
            </div>
        </React.Fragment>
    }
}

export default App