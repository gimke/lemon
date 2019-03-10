/**
 * Created by yanggang on 2019/3/8.
 */
import "whatwg-fetch";
import "promise-polyfill/src/polyfill";

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import HashHistory from "./history/hashhistory";
import Store from "./store";
import App from "./pages/app";

// import Common from "./common";
// const App = Common.loaderWrapper(() => import(/* webpackChunkName: "app" */'./pages/app'));

const router = <Provider store={Store}>
    <Router history={HashHistory}>
        <Switch>
            <Route strict path="/" component={App}/>
        </Switch>
    </Router></Provider>;

render(router, document.getElementById('root'));
