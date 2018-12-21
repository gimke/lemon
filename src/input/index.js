/**
 * Created by yanggang on 2018/12/21.
 * input
 */
import React, {Component} from "react";

export default class Block extends Component {
    state = {
        focus: false
    };
    onFocus = () => {
        this.setState({focus: true})
    };
    onBlur = () => {
        this.setState({focus: false})
    };

    render() {
        let className = this.state.focus ? "lm-input-wrapper focus" : "lm-input-wrapper";
        return <span className={className}>
            <div className="lm-input">
                <div className="tip">{this.props.placeHolder}</div>
                <div className="border"/>
                <input
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
            </div>
        </span>;
    }
}