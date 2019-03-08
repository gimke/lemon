/**
 * Created by yanggang on 2018/12/22.
 */


import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {

    state = {
        clicked:false
    };
    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    };

    static defaultProps = {
        prefixClass: "lemon-button",
        type: "default",
    };
    handleClick = (e) => {
        this.setState({clicked:true});
        setTimeout(() => {
            this.setState({clicked:false});
        },200);
        if(this.props.onClick) {
            this.props.onClick(e);
        }
    };
    render() {
        const {style, htmlType, type, size, className, prefixClass, ...rest} = this.props;
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        if (size) {
            classes += " " + prefixClass + "-" + size;
        }
        if (type) {
            classes += " " + prefixClass + "-" + type;
        }
        if (this.state.clicked) {
            classes += " clicked";
        }
        return <button
            {...rest}
            onClick={this.handleClick}
            type={htmlType || 'button'}
            className={classes}
            style={style}>
                {this.props.children}
            </button>
    }
}