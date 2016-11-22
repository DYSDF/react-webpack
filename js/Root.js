// 应用的主入口

/**
 * Created by 断崖 on 2016/11/21.
 */

import React from "react";
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Link, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import {createStore} from 'redux';

import reducer from "./reducers"

import App from "./containers/App";
import Index from './containers/Index';
import ShopCar from  "./containers/ShopCar";
import AboutMe from  "./containers/AboutMe";

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/index"/>
                <Route path="/index" component={Index}/>
                <Route path="/shopCar" component={ShopCar}/>
                <Route path="/aboutMe" component={AboutMe}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("container")
);
