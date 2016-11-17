/**
 * Created by 断崖 on 2016/11/15.
 */

import React from "react";

class ProductItem extends React.Component {
    render() {
        return (
            <div className="product_item">
                <div className="product_check">
                    <input id="product_0" type="checkbox" className="hidden"/>
                    <label htmlFor="product_0" className="check_box"/>
                </div>
                <div className="product_detail">
                    <span className="product_img">
                        <img src="http://img.wmwbeautysalon.com/group1/M00/0A/DB/Cq3BIVcgeE2Ae7gCAAKk9tsNuMo326.jpg"
                         alt=""/>
                    </span>
                    <p className="product_title">保湿补水面膜</p>
                    <p className="product_selected">已选：保湿 200ml</p>
                    <input className="product_count" type="text"/>
                </div>
                <div className="product_price">
                    <div className="old_price">998.00</div>
                    <div className="cur_price">98.00</div>
                </div>
                <a href="javascript:;" className="product_delete"><i className="icon icon_delete"/></a>
            </div>
        )
    }
}

class ProviderItem extends React.Component {
    render() {
        return (
            <dl className="provider_item">
                <dt className="provider_title">
                    <input id="provider_0" type="checkbox" className="hidden"/>
                    <label htmlFor="provider_0" className="check_box"/>
                    <i className="icon icon_store_icon"/>
                    <span>品牌供应商</span>
                </dt>
                <dd className="product_items">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </dd>
            </dl>
        )
    }
}

class ShopCar extends React.Component {
    render() {
        return (
            <div className="shop_car_list">
                <div className="product_list">
                    <ProviderItem/>
                    <ProviderItem/>
                </div>
                <div className="count_toolbar">
                    <div className="check_all">
                        <input id="check_all_btn" type="checkbox" className="hidden"/>
                        <label htmlFor="check_all_btn" className="check_box">全选</label>
                    </div>
                    <div className="total_price">
                        合计：￥66.66
                    </div>
                    <div className="settle_btn">
                        <i className="icon icon_dollar"/>&nbsp;
                        <span>去结算(12)</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopCar
