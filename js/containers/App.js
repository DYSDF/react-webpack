/**
 * Created by Jay on 16/11/21.
 */

import React from "react";
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as PropTypes from "react/lib/ReactPropTypes";

const getProductCount = (shopCarState) => {
    let count = 0;
    Object.keys(shopCarState).map(providerId => {
        let products = shopCarState[providerId].products;
        Object.keys(products).map(productId => {
            count += products[productId].count * 1;
        });
    });
    return count;
};

const App = ({shopCarState, children}) => (
    <div className="tab_contain">
        {children}
        <div className="tab_bar">
            <Link to="/index" className="tab_bar_item" activeClassName="active"><i
                className="icon icon_index"/>首页</Link>
            <Link to="/shopCar" className="tab_bar_item" activeClassName="active"><i
                className="icon icon_car"/>购物车<span
                className="shop_car_count">{getProductCount(shopCarState)}</span></Link>
            <Link to="/aboutMe" className="tab_bar_item" activeClassName="active"><i
                className="icon icon_me"/>个人中心</Link>
        </div>
    </div>
);

App.propTypes = {
    shopCarState: PropTypes.object.isRequired,
    // shopCarActions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    shopCarState: state.shopCar
});

const mapDispatchToProps = dispatch => ({
    // shopCarActions: bindActionCreators(ShopCarActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
