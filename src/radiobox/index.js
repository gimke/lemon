/**
 * Created by yanggang on 2018/12/22.
 */

import React, {Component} from "react";

export default class Radiobox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.defaultChecked || props.checked
        }
    }

    static defaultProps = {
        prefixClass: "lemon-radiobox",
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.props.checked) {
            this.setState({checked: nextProps.checked});
        }
    }

    onChange = (e) => {
        if (this.props.checked === undefined) {
            this.setState({checked: e.target.checked});
        }
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };
    getValue = () => {
        return this.state.checked;
    };

    render() {
        const {style, className, prefixClass, children, ...rest} = this.props;
        const radioInput = prefixClass + "-input";
        const radioInner = prefixClass + "-inner";

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
        return <label className={prefixClass + "-wrapper"}>
            <span
                className={classes}
                style={style}>
                <input {...rest} onChange={this.onChange} type="radio" className={radioInput}/>
                <span className={radioInner}/>
            </span>
            <span>{children}</span>
        </label>;
    }
}