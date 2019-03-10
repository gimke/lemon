/**
 * Created by yanggang on 2019/3/10.
 */
import React from "react";

import ButtonTypes from "./types"
import ButtonSize from "./size"
import ButtonDisabled from "./disabled"

import "./index.css"

export default () => {
    return <div className="buttons">
        <ButtonTypes/>
        <ButtonSize/>
        <ButtonDisabled/>
    </div>
}