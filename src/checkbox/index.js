/**
 * Created by yanggang on 2018/12/22.
 */


import React, {Component} from "react";

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.defaultChecked || props.checked
        }
    }
    static defaultProps = {
        prefixClass: "lemon-checkbox",
    };
    onChange = (e) => {
        if(this.props.checked === undefined) {
            this.setState({checked:e.target.checked});
        }
        if(this.props.onChange) {
            this.props.onChange(e);
        }
    };
    getValue = () => {
        return this.state.checked;
    };
    render() {
        const {style, className, prefixClass, ...rest} = this.props;
        const checkboxInput = prefixClass+"-input";
        const checkboxInner = prefixClass+"-inner";

        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        if (this.state.checked) {
            classes += " " + prefixClass + "-checked";
        }
        if (this.props.disabled) {
            classes += " " + prefixClass + "-disabled";
        }
        return <span
                    className={classes}
                    style={style}
        >
            <input {...rest} onChange={this.onChange} type="checkbox" className={checkboxInput} />
            <span className={checkboxInner} />
        </span>;
    }
}