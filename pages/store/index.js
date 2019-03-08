/**
 * Created by yanggang on 2018/10/25.
 */
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers";

const Store = createStore(reducer, applyMiddleware(thunk));
export default Store