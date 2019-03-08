/**
 * Created by yanggang on 2019/3/8.
 */
/**
 * Created by yanggang on 2018/10/22.
 */
import "whatwg-fetch";
import "promise-polyfill/src/polyfill";

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import Store from "./store";
import App from "./app";

const router = <Provider store={Store}>
    <App/>
</Provider>;

render(router, document.getElementById('root'));
