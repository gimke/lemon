import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static defaultProps = {
        prefixClass: "lemon-menu-item",
    };
    render() {
        const {style, className, prefixClass, ...rest} = this.props;
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        return <li {...rest}
                    className={classes}
                    style={style}>{this.props.children}</li>;
    }
}