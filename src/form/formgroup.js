/**
 * Created by yanggang on 2019/1/6.
 */
import React, {Component} from "react";

export default class FormGroup extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        prefixClass: "lemon-form-group",
    };
    getValue =  () => {

    };
    render() {
        const {style, className, prefixClass, children, ...rest} = this.props;
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        return <div {...rest} className={classes} style={style}>
            {children}
        </div>
    }
}