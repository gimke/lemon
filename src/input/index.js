/**
 * Created by yanggang on 2018/12/21.
 * input
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            empty: true
        }
    }

    componentWillMount() {
        this.checkEmpty(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.checkEmpty(nextProps);
    }

    checkEmpty = (props) => {
        let empty = true;
        if (props.value !== undefined) {
            empty = !props.value;
            this.setState({
                empty: empty,
            });
        } else {
            if (props.defaultValue !== undefined) {
                empty = !props.defaultValue;
                this.setState({
                    empty: empty,
                });
            }
        }
    };

    static propTypes = {
        size: PropTypes.oneOf(['small', 'large']),
    };

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
        if (this.props.value === undefined) {
            this.setState({empty: e.target.value === ""});
        }
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    getValue = () => {
        return this.input.value;
    };

    render() {
        const {addon, style, className, prefixClass, size, ...rest} = this.props;

        const classInner = prefixClass + "-inner";
        const classSize = size ? " " + prefixClass + "-" + size : "";
        const classLabel = prefixClass + "-label";
        const classBorder = prefixClass + "-border";
        const classAddon = prefixClass + "-addon";
        const labelMoved = !this.state.empty ? " label-moved" : "";
        const focused = this.state.focus ? " focused" : "";

        let classes = prefixClass + classSize + labelMoved + focused;
        if (className) {
            classes += " " + className;
        }
        if ("value" in this.props) {
            if (this.props.value) {
                rest.value = this.props.value
            } else {
                rest.value = ""
            }
            delete rest.defaultValue;
        }
        if ("label" in this.props) {
            delete rest.placeholder;
        }
        return <span className={classes} style={style}>
            <div className={classInner}>
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
                <div className={classBorder}/>
                <div className={classLabel}>{this.props.label}</div>
            </div>
        </span>;
    }
}