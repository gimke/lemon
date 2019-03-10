import React from "react";

import TopMenu from "../components/topmenu";
import SideMenu from "../components/sidemenu";
import {Menu} from "../../src";
import "./app.css";

import Buttons from "./buttons";

class App extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <TopMenu />
            <Menu />
            <div className="main-wrapper">
                <SideMenu />
                <div className="content">
                    <Buttons />
                </div>
            </div>
        </React.Fragment>
    }
}

export default App