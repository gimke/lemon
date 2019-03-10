/**
 * Created by yanggang on 2019/3/10.
 * menu
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import MenuItem from "./menuitem";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static Item = MenuItem;
    static propTypes = {
        type: PropTypes.oneOf(['vertical', 'horizontal']),
    };
    static defaultProps = {
        prefixClass: "lemon-menu",
        type: "horizontal",
    };
    componentDidMount() {
    }
    render() {
        const {style, type, className, prefixClass, ...rest} = this.props;
        let classes = prefixClass;
        if (className) {
            classes += " " + className;
        }
        if (type) {
            classes += " " + prefixClass + "-" + type;
        }
        return <ul {...rest}
                    className={classes}
                    style={style}>{this.props.children}</ul>;
    }
}