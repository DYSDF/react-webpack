// 应用的主入口
import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import {Router, Link, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

import Index from './containers/index';
import ShopCar from  "./containers/ShopCar";
import AboutMe from  "./containers/AboutMe";

import reducer from './reducers';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <div className="tab_contain">
                {this.props.children}
                <div className="tab_bar">
                    <Link to="/index" className="tab_bar_item" activeClassName="active"><i className="icon icon_index"/>首页</Link>
                    <Link to="/shopCar" className="tab_bar_item" activeClassName="active"><i className="icon icon_car"/>购物车</Link>
                    <Link to="/aboutMe" className="tab_bar_item" activeClassName="active"><i className="icon icon_me"/>个人中心</Link>
                </div>
            </div>
        )
    }
}

render(
    (<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/index"/>
                <Route path="/index" component={Index}/>
                <Route path="/shopCar" component={ShopCar}/>
                <Route path="/aboutMe" component={AboutMe}/>
            </Route>
        </Router>
    </Provider>),
    document.getElementById("container")
);







