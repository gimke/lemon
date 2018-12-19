import React, { Component } from 'react';
import "./style"
export default class Foo extends Component {
    state = {
        text: "foo"
    };
    render() {
        return <div>{this.state.text}</div>;
    }
}