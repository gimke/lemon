/**
 * Created by yanggang on 2018/12/26.
 * form item
 */
import React, {Component} from "react";
import FormContext from "./formcontext";
import schema from "async-validator";

export default class FormItem extends Component {
    static contextType = FormContext;

    constructor(props, context) {
        super(props);
        this.state = {
            hasError: false,
            tip: props.tip,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.tip !== this.props.tip) {
            this.setState({tip: nextProps.tip});
        }
    }

    static defaultProps = {
        prefixClass: "lemon-form-item",
        tip: "",
    };
    validate = () => {
        let messages = null;
        if(this.props.rules) {
            for(let i=0;i<this.props.rules.length;i++) {
                let rule =  this.props.rules[i];
                let value = {};
                let descriptor = {};
                value[this.props.name] = this.control.getValue();
                descriptor[this.props.name] = rule;
                let validator = new schema(descriptor);

                validator.validate(value, (errors, fields) => {
                    if(errors) {
                        messages = messages || [];
                        messages.push(errors);
                        this.setState({hasError:true,tip:rule.message});
                    }
                });
            }
            if(!messages) {
                this.setState({hasError:false,tip:this.props.tip});
            }
        }
        return messages;
        //return null;
    };

    render() {
        const {style, className, prefixClass, rules, tip, ...rest} = this.props;
        const classTip = prefixClass + "-tip";
        const classControl = prefixClass + "-control";
        const classHasError = "has-error";
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        if (this.state.hasError) {
            classes += " " + classHasError;
        }
        const component = this.props.children;

        if (Array.isArray(component)) {
            console.error("Form.Item can only accept a single child");
            return null;
        }
        return <div {...rest} className={classes} style={style}>
            <div className={classControl} >
                <component.type {...component.props} ref={(control) => {
                    this.control = control;
                    this.context.form.setItem(this.props.name, {formItem: this, control: control});
                }}/>
            </div>
            {this.state.tip !== "" ? <div className={classTip}>{this.state.tip}</div> : null}
        </div>
    }
}