/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react";
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as PropTypes from "react/lib/ReactPropTypes";

import ShopCarBox from "../components/shopcar/ShopCar"

import * as ShopCarActions from '../actions/shopCar'

const ShopCar = ({shopCarState, shopCarActions}) => (
    <div className="tab_body">
        <ShopCarBox shopCarState={shopCarState} shopCarActions={shopCarActions}/>
    </div>
);

ShopCar.propTypes = {
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
)(ShopCar)
