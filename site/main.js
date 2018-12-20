/**
 * Created by yanggang on 2018/12/20.
 */

import React from "react"
import {render} from "react-dom";

import Block from "../src/block"

const App = () => <span><Block/></span>;


const router = <App/>;

render(router, document.getElementById('root'));