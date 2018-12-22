/**
 * Created by yanggang on 2018/12/22.
 */


import React, {Component} from "react";

export default class Button extends Component {
    static defaultProps = {
        prefixClass: "lemon-button",
        type: "text",
    };
    render() {
        const {style, className, prefixClass, ...rest} = this.props;
        let thisClassName = prefixClass;
        if (className) {
            thisClassName += " " + className;
        }
        return <button className={thisClassName} style={style}>{this.props.children}</button>
    }
}