/**
 * Created by yanggang on 2018/12/26.
 * form
 */
import React, {Component} from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        prefixClass: "lemon-form",
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(e);
        }
    };

    render() {
        const {style, className, prefixClass, ...rest} = this.props;

        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        console.log(this.props);
        return <form className={classes} style={style} {...rest}>
            {this.props.children}
        </form>;
    }
}