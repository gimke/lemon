import React from "react";

import {Button} from "../src"
import "../src/button/style"

import "../src/input/style"
import Input from "../src/input"

class App extends React.PureComponent{

    constructor(props){
        super(props);
    }

    render() {
        return <div>
            <Button type="primary">Test</Button>
            <Input defaultValue="AAA"/>
        </div>
    }
}

export default App