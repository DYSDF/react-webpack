/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react";
import {connect} from 'react-redux';
import * as PropTypes from "react/lib/ReactPropTypes";
import bindActionCreators from "redux/es/bindActionCreators";

import SearchBar from "../components/index/SearchBar"
import Swiper from "../components/index/Swiper"
import ProductBox from  "../components/index/ProductBox"

import * as ShopCarActions from "../actions"

const Index = ({shopCarState, actions}) => (
    <div className="tab_body">
        <SearchBar/>
        <Swiper/>
        <ProductBox products={shopCarState} addToShopCar={actions.addProduct}/>
    </div>
);

Index.propTypes = {
    shopCarState: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    shopCarState: state.shopCar
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ShopCarActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
