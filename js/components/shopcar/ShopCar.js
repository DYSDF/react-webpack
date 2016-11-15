/**
 * Created by 断崖 on 2016/11/15.
 */

import React from "react";

class ProductItem extends React.Component {
    render() {
        return (
            <div>
                单个商品
            </div>
        )
    }
}

class ShopCar extends React.Component {
    render() {
        return (
            <div className="shop_car_list">
                <div className="product_list">
                    <ProductItem/>
                </div>
                <div className="count_toolbar">
                    <div className="check_all">
                        <input id="check_all_btn" type="checkbox" className="hidden"/>
                        <label htmlFor="check_all_btn">全选</label>
                    </div>
                    <div className="total_price">
                        合计：￥66.66
                    </div>
                    <div className="settle_btn">
                        <a href="javascript:;">去结算</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopCar
