import React from "react";

import {Button} from "../../src"
import "../../src/button/style"

import "../../src/input/style"
import Input from "../../src/input"

import TopMenu from "../components/topmenu"
import "./app.css"

class App extends React.PureComponent{

    constructor(props){
        super(props);
    }

    render() {
        return <div>
            <TopMenu />
            <Button type="primary">Test</Button>
            <Input defaultValue="AAA"/>
        </div>
    }
}

export default App