import React, { Component } from 'react';
import "./style"

export default class Block extends Component {
    state = {
        text: "AAA"
    };
    render() {
        return <div>{this.state.text}</div>;
    }
}