/**
 * Created by yanggang on 2018/12/26.
 * form
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        prefixClass: "lemon-form",
    };

    render() {
        const { style, className, prefixClass, ...rest} = this.props;

        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        return <form className={classes} style={style}>
            {this.props.children}
        </form>;
    }
}