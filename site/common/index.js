/**
 * Created by yanggang on 2018/10/24.
 */
import Config from "config";
import React from "react";
import Loadable from "react-loadable";
import {matchPath} from "react-router-dom";
import BrowserHistory from "../history/browserhistory";
import NProgress from "nprogress"
import "nprogress/nprogress.css"

class loading extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        NProgress.set(0.3);
    }
    componentWillUnmount() {
        NProgress.done();
        NProgress.remove();
    }
    render() {
        return null
    }
}

class Common {
    status = {
        NULL: '',
        REQUEST: 'Request',
        SUCCESS: 'Success',
        FAILURE: 'Failure',
    };
    initRequest = {
        status: this.status.NULL,
        httpStatus: 0,
        error: "",
        lastUpdated: "2000-1-1" //请求的结果时间
    };
    checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else if (response.status === 500) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    };
    parseJSON = response => {
        return response.json();
    };
    parseText = response => {
        return response.text();
    };
    post = (url, params, cb) => {
        const searchParams = Object.keys(params)
            .map(key => {
                return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
            })
            .join("&");

        fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: "include",
            body: searchParams
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(json => {
                cb(json, null, 200);
            })
            .catch(error => {
                if (error.response) {
                    cb(error.response, error.message, error.response.status);
                } else {
                    cb(null, error.message, 500);
                }
            });
    };
    graphqlUrl = (url, cmd, cb) => {
        fetch(url, {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            credentials: "include",
            body: JSON.stringify(cmd)
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(json => {
                if (json.errors) {
                    if (json.errors[0].status) {
                        cb(json, json.errors[0].message, json.errors[0].status);
                    } else {
                        cb(json, json.errors[0].message, 500);
                    }
                } else {
                    cb(json, null, 200);
                }
            })
            .catch(error => {
                if (error.response) {
                    cb(null, error.message, error.response.status);
                } else {
                    cb(null, error.message, 500);
                }
            });
    };
    graphql = (cmd, cb) => {
        this.graphqlUrl(Config.host + "/api", cmd, cb);
    };
    // loading = () => <div className="spinner-content-page">Loading...</div>;
    loaderWrapper = (loader) => Loadable({
        loader,
        loading: loading
    });
    generateRandomString = (length) => {
        length = length || 32;
        let source = "abcdefghzklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let s = "";
        for (let i = 0; i < length; i++) {
            s += source.charAt(Math.ceil(Math.random() * 1000) % source.length);
        }
        return s;
    };
    hasChild = (parentMenu) => {
        const {account} = Store.getState();
        let find = false;
        for (let i = 0; i < account.data.menuList.length; i++) {
            let menu = account.data.menuList[i];
            if (menu.parentId === parentMenu.id) {
                find = true;
                break
            }
        }
        return find;
    };
    currentMenu = () => {
        const {account} = Store.getState();
        for (let i = 0; i < account.data.menuList.length; i++) {
            let menu = account.data.menuList[i];
            if (menu.isEnable) {
                const match = matchPath(BrowserHistory.location.pathname, {
                    path: menu.path,
                    strict: true
                });
                if (match) {
                    return menu
                }
            }
        }
        //找不到直接跳转404页面
        BrowserHistory.push("/error/404");
        return null
    };
    isPhoneAvailable=(value)=>{
        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(value)) {
            return false;
        } else {
            return true;
        }
    };

    isNumber=(value)=>{
        let myreg=/^[0-9]*$/;
        if (!myreg.test(value)) {
            return false;
        } else {
            return true;
        }
    }
}

export default new Common();
