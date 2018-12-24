/**
 * Created by yanggang on 2018/12/22.
 */


import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {

    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    };

    static defaultProps = {
        prefixClass: "lemon-button",
        type: "default",
    };

    render() {
        const {style, type, size, className, prefixClass, ...rest} = this.props;
        let thisClassName = prefixClass;
        if (className) {
            thisClassName += " " + className;
        }
        if (size) {
            thisClassName += " " + prefixClass + "-" + size;
        }
        if (type) {
            thisClassName += " " + prefixClass + "-" + type;
        }
        return <button {...rest} className={thisClassName} style={style}>{this.props.children}</button>
    }
}