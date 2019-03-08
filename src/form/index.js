/**
 * Created by yanggang on 2018/12/26.
 * form
 */
import React, {Component} from "react";
import FormItem from "./formitem";
import FormGroup from "./formgroup";
import FormContext from "./formcontext";

export default class Form extends Component {
    constructor(props) {
        super(props);
    }
    items = {};
    setItem = (name, element) => {
        this.items[name] = element;
    };
    static Item = FormItem;
    static Group = FormGroup;

    onSubmit = (e) => {
        if(this.props.onSubmit) {
            let values = {};
            let errors = null;
            Object.keys(this.items).map((key) => {
                let component = this.items[key];
                if(component.control.getValue) {
                    values[key] = component.control.getValue();
                } else {
                    console.error("The component "+component.control+" missing funtion getValue")
                }
                let err = component.formItem.validate();
                if(err) {
                    errors = errors || {};
                    errors[key] = err;
                }
            });

            this.props.onSubmit(e,errors,values)
        }
    };
    static defaultProps = {
        prefixClass: "lemon-form",
    };

    render() {
        const {style, className, prefixClass, onSubmit,...rest} = this.props;

        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }

        return <FormContext.Provider value={{form:this}}>
            <form className={classes} style={style} onSubmit={this.onSubmit} {...rest}>
                {this.props.children}
            </form>
        </FormContext.Provider>;
    }
}