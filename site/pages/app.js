import React from "react";

import "../../src/input/style"
import Input from "../../src/input"

import TopMenu from "../components/topmenu"
import "./app.css"

import Buttons from "./buttons"

class App extends React.PureComponent{

    constructor(props){
        super(props);
    }

    render() {
        return <div>
            <TopMenu />
            <Buttons />
            <Input defaultValue="AAA"/>
        </div>
    }
}

export default App