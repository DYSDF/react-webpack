/**
 * Created by 断崖 on 2016/11/15.
 */

import React from "react";

import NumberBox from "../NumberBox";

class ProductItem extends React.Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            isTouch: false,
            lastTouchX: 0
        }
    }

    handleTouchStart(e) {
        this.setState({
            isTouch: true,
            lastTouch: {
                x: e.nativeEvent.changedTouches[0].clientX,
                y: e.nativeEvent.changedTouches[0].clientY
            }
        })
    }

    handleTouchMove(e) {
        if (this.state.isTouch) {
            let translateX = e.nativeEvent.changedTouches[0].clientX - this.state.lastTouch.x;
            let translateY = e.nativeEvent.changedTouches[0].clientY - this.state.lastTouch.y;
            if (translateX < -10 && translateY < -10 && translateX > translateY) {
                this.setState({
                    isTouch: false
                });
                return;
            }
            if (translateX < this.state.maxTranslateX) translateX = this.state.maxTranslateX;
            if (translateX > 0) translateX = 0;

            this.refs.product.style.transform = `translateX(${translateX}px)`;
        } else {
            this.refs.product.style.transform = `translateX(0)`;
        }
    }

    handleTouchEnd(e) {
        if (this.state.isTouch) {
            let translateX = e.nativeEvent.changedTouches[0].clientX - this.state.lastTouch.x;
            if (translateX < this.state.maxTranslateX / 2) {
                this.refs.product.style.transform = `translateX(${this.state.maxTranslateX}px)`;
            } else {
                this.refs.product.style.transform = `translateX(0)`;
            }
            this.setState({
                isTouch: false
            });
        }
    }

    componentDidMount() {
        this.setState({
            maxTranslateX: -this.refs.operate.offsetWidth
        })
    }

    render() {
        return (
            <div ref="product" className="product_item"
                 onTouchStart={this.handleTouchStart.bind(this)}
                 onTouchMove={this.handleTouchMove.bind(this)}
                 onTouchEnd={this.handleTouchEnd.bind(this)}>
                <div className="product_check">
                    <input id={"product_" + this.props.index} type="checkbox" className="hidden"/>
                    <label htmlFor={"product_" + this.props.index} className="check_box"/>
                </div>
                <div className="product_detail">
                    <span className="product_img">
                        <img src="http://img.wmwbeautysalon.com/group1/M00/0A/DB/Cq3BIVcgeE2Ae7gCAAKk9tsNuMo326.jpg"
                             alt=""/>
                    </span>
                    <p className="product_title">保湿补水面膜</p>
                    <p className="product_selected">已选：保湿 200ml</p>
                    <NumberBox/>
                </div>
                <div className="product_price">
                    <div className="old_price">998.00</div>
                    <div className="cur_price">98.00</div>
                </div>
                <div ref="operate" className="product_operate">删除</div>
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
                    <input id={"provider_" + this.props.index} type="checkbox" className="hidden"/>
                    <label htmlFor={"provider_" + this.props.index} className="check_box"/>
                    <i className="icon icon_store_icon"/>
                    <div>品牌供应商</div>
                </dt>
                <dd className="product_items">
                    {
                        [0].map(function (index, item, array) {
                            return (
                                <ProductItem key={index} index={index}/>
                            )
                        })
                    }
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
                    {
                        Object.keys(this.props.shopCarState).map(function (providerId) {
                            return (
                                <ProviderItem key={providerId} index={providerId}/>
                            )
                        }.bind(this))
                    }
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
