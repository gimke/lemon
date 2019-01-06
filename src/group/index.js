/**
 * Created by yanggang on 2019/1/6.
 */
import React, {Component} from "react";

export default class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || props.defaultValue || [],
        };
    }

    static defaultProps = {
        prefixClass: "lemon-group",
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value});
        }
    }

    getValue = () => {
        return this.state.value;
    };

    onChange = (value) => {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };
    renderChildren = (children) => {
        if (Array.isArray(children)) {
            return children.map((child, index) => {
                return <child.type
                    key={child.props.value}
                    {...child.props}
                    checked={this.state.value.indexOf(child.props.value) !== -1}
                    onChange={(e) => {
                        const optionIndex = this.state.value.indexOf(e.target.value);
                        const value = [...this.state.value];
                        if (optionIndex === -1) {
                            value.push(e.target.value);
                        } else {
                            value.splice(optionIndex, 1);
                        }
                        if (!('value' in this.props)) {
                            this.setState({value});
                        } else {
                            this.onChange(value);
                        }
                        if (child.props.onChange) {
                            child.props.onChange(e)
                        }
                    }}
                />
            })
        } else {
            let child = children;
            return <child.type
                key={child.props.value}
                {...child.props}
                checked={this.state.value.indexOf(child.props.value) !== -1}
                onChange={(e) => {
                    const optionIndex = this.state.value.indexOf(e.target.value);
                    const value = [...this.state.value];
                    if (optionIndex === -1) {
                        value.push(e.target.value);
                    } else {
                        value.splice(optionIndex, 1);
                    }
                    if (!('value' in this.props)) {
                        this.setState({value});
                    } else {
                        this.onChange(value);
                    }
                    if (child.props.onChange) {
                        child.props.onChange(e)
                    }
                }}
            />;
        }
    };

    render() {
        const {style, className, prefixClass, onChange, children, ...rest} = this.props;
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        return <div {...rest} className={classes} style={style}>
            {this.renderChildren(children)}
        </div>
    }
}