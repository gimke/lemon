/**
 * Created by yanggang on 2018/12/26.
 * form
 */
import React, {Component} from "react";

class form {
    items = {};
    item = (name, component) => {
        return <component.type {...component.props} ref={(input) => {
            if(!this.items[name]) {
                this.items[name] = input;
            }
        }}/>
    };
    validateFields = (cb) => {
        let values = {};
        Object.keys(this.items).map((key) => {
            let component = this.items[key];
            values[key] = component.value;
        });
        cb(null,values);
    }
}

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    static with = (component) => {
        return () => {
            return React.createElement(component, {form: new form()});
        }
    };

    static defaultProps = {
        prefixClass: "lemon-form",
    };

    render() {
        const {style, className, prefixClass, ...rest} = this.props;

        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        return <form className={classes} style={style} {...rest}>
            {this.props.children}
        </form>;
    }
}