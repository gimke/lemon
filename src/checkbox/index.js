/**
 * Created by yanggang on 2018/12/22.
 */


import React, {Component} from "react";

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.cheched
        }
    }

    static defaultProps = {
        checked: false,
        prefixClass: "lemon-checkbox",
    };
    onClick = (e) => {
        this.setState({checked:!this.state.checked});
        if(this.props.onChange) {
            this.props.onChange(e);
        }
    };
    render() {
        const {style, className, checked, prefixClass, ...rest} = this.props;
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        if (this.state.checked) {
            classes += " " + prefixClass + "-checked";
        }
        return <div {...rest}
                    className={classes}
                    style={style}
                    onClick={this.onClick}
        >
            <div className="rect"/>
            <div className="check">
                <div className="inner">
                    <div className="a"/>
                    <div className="b"/>
                </div>
            </div>
        </div>
    }
}