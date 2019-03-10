import React from "react";

import TopMenu from "../components/topmenu";
import "../../src/menu/style";
import {Menu} from "../../src";
import "./app.css";
import {NavLink,Route, Router, Switch} from 'react-router-dom'
import Common from "../common"

const Buttons = Common.loaderWrapper(() => import(/* webpackChunkName: "buttons" */'./buttons'));

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
                    <Switch>
                        <Route strict path="/button" component={Buttons}/>
                        <Route strict path="/input" component={() => {
                            return <div>input</div>
                        }}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    }
}

export default App