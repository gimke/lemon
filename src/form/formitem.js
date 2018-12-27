/**
 * Created by yanggang on 2018/12/26.
 * form item
 */
import React, {Component} from "react";
import FormContext from "./formcontext";
import Input from "../input/index";

export default class FormItem extends Component {
    static contextType = FormContext;
    constructor(props,context) {
        super(props);
    }
    validate = () => {

    };
    render() {
        const component = this.props.children;
        return <React.Fragment>
            <component.type {...component.props} ref={(element) => {
                this.context.form.setItem(this.props.name, {formItem:this,element:element});
            }}/>
        </React.Fragment>
    }
}