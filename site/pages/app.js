import React from "react";

import TopMenu from "../components/topmenu";
import "../../src/menu/style";
import {Menu} from "../../src";
import "./app.css";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import Common from "../common";

const Button = Common.loaderWrapper(() => import(/* webpackChunkName: "button" */'./button'));
const Input = Common.loaderWrapper(() => import(/* webpackChunkName: "input" */'./input'));
const Checkbox = Common.loaderWrapper(() => import(/* webpackChunkName: "checkbox" */'./checkbox'));

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
                    <Menu.Item>
                        <NavLink to="/checkbox">Checkbox</NavLink>
                    </Menu.Item>
                </Menu>
                <div className="content">
                    <Switch>
                        <Redirect exact path="/" to="/button"/>
                        <Route strict path="/button" component={Button}/>
                        <Route strict path="/input" component={Input}/>
                        <Route strict path="/checkbox" component={Checkbox}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    }
}

export default App