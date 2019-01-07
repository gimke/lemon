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
    childOnChange = (e, child) => {
        const optionIndex = this.state.value.indexOf(e.target.value);
        let value = [...this.state.value];
        let multiValue = true;
        switch (child.type.name) {
            case "Radiobox":
                multiValue = false;
                break;
        }
        if (optionIndex === -1) {
            if (multiValue) {
                value.push(e.target.value);
            } else {
                value = [e.target.value];
            }
        } else {
            if (multiValue) {
                value.splice(optionIndex, 1);
            }
        }
        if (!('value' in this.props)) {
            this.setState({value});
        } else {
            this.onChange(value);
        }
        if (child.props.onChange) {
            child.props.onChange(e)
        }
    };
    renderChildren = (children) => {
        let items = React.Children.toArray(children);
        return items.map((child, index) => {
            return <child.type
                key={child.props.value}
                {...child.props}
                checked={this.state.value.indexOf(child.props.value) !== -1}
                onChange={(e) => {
                    this.childOnChange(e, child);
                }}
            />
        });
    };

    render() {
        const {style, className, prefixClass, onChange, children, ...rest} = this.props;
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        return <span {...rest} className={classes} style={style}>
            {this.renderChildren(children)}
        </span>
    }
}