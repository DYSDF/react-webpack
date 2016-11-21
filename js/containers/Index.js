/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react";
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as PropTypes from "react/lib/ReactPropTypes";

import SearchBar from "../components/index/SearchBar"
import Swiper from "../components/index/Swiper"
import ProductBox from  "../components/index/ProductBox"
import * as ShopCarActions from '../actions/shopCar'

const Index = ({shopCarState, shopCarActions}) => (
    <div className="tab_body">
        <SearchBar/>
        <Swiper/>
        <ProductBox shopCarActions={shopCarActions}/>
    </div>
);

Index.propTypes = {
    shopCarState: PropTypes.object.isRequired,
    shopCarActions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    shopCarState: state.shopCar
});

const mapDispatchToProps = dispatch => ({
    shopCarActions: bindActionCreators(ShopCarActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
