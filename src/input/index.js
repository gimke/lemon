/**
 * Created by yanggang on 2018/12/21.
 * input
 */
import React, {Component} from "react";

export default class Input extends Component {
    constructor(props) {
        super(props);
        let empty = true;
        if (props.value !== undefined) {
            empty = !props.value
        } else {
            empty = !props.defaultValue
        }
        this.state = {
            focus: false,
            empty: empty,
        };
    }

    static defaultProps = {
        prefixClass: "lemon-input",
        type: "text",
    };

    focus = () => {
        this.input.focus();
    };

    blur = () => {
        this.input.blur();
    };

    select = () => {
        this.input.select();
    };

    onFocus = (e) => {
        this.setState({focus: true});
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };
    onBlur = (e) => {
        this.setState({focus: false});
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };
    onChange = (e) => {
        this.setState({empty: e.target.value === ""});
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    render() {
        const {addon, style, className, prefixClass, ...rest} = this.props;

        const classInner = prefixClass + "-inner";
        const classTip = prefixClass + "-label";
        const classBorder = prefixClass + "-border";
        const classAddon = prefixClass + "-addon";
        const labelMoved = !this.state.empty ? " label-moved" : "";
        const focused = this.state.focus ? " focused" : "";

        let thisClassName = this.props.prefixClass + labelMoved + focused;
        if (className) {
            thisClassName += " " + this.props.className;
        }
        if ("value" in this.props) {
            if (this.props.value) {
                rest.value = this.props.value
            } else {
                rest.value = ""
            }
            delete rest.defaultValue;
        }
        return <span className={thisClassName} style={style}>
            <div className={classInner}>
                <div className={classBorder}/>
                <input
                    {...rest}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    ref={(input) => {
                        this.input = input
                    }}
                />
                {addon ? <span className={classAddon}>{addon}</span> : null}
                <div className={classTip}>{this.props.label}</div>
            </div>
        </span>;
    }
}