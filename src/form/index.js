/**
 * Created by yanggang on 2018/12/26.
 * form
 */
import React, {Component} from "react";
import FormItem from "./formitem";
import FormContext from "./formcontext";

// class form {
//     items = {};
//     item = (name, component) => {
//         return <component.type {...component.props} ref={(input) => {
//             if (!this.items[name]) {
//                 this.items[name] = input;
//             }
//         }}/>
//     };
//     validateFields = (cb) => {
//         let values = {};
//         Object.keys(this.items).map((key) => {
//             let component = this.items[key];
//             values[key] = component.value;
//         });
//         cb(null, values);
//     }
// }

export default class Form extends Component {
    constructor(props) {
        super(props);
    }
    items = {};
    setItem = (name, element) => {
        this.items[name] = element;
    };
    static Item = FormItem;

    // static with = (component) => {
    //     return () => {
    //         return React.createElement(component, {form: new form()});
    //     }
    // }
    onSubmit = (e) => {
        if(this.props.onSubmit) {
            let values = {};
            Object.keys(this.items).map((key) => {
                let component = this.items[key];
                console.log(component.formItem);
                values[key] = component.element.getValue();
            });
            this.props.onSubmit(e,null,values)
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