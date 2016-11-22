/**
 * Created by 断崖 on 2016/11/15.
 */

import React from "react";

import NumberBox from "../NumberBox";

const getProductsCount = (shopCarState) => {
    let count = 0;
    Object.keys(shopCarState).map(providerId => {
        let products = shopCarState[providerId].products;
        Object.keys(products).map(itemId => {
            if (products[itemId].selected) {
                count += products[itemId].count * 1;
            }
        });
    });
    return count;
};

const getProductsPrice = (shopCarState) => {
    let price = 0;
    Object.keys(shopCarState).map(providerId => {
        let products = shopCarState[providerId].products;
        Object.keys(products).map(itemId => {
            if (products[itemId].selected) {
                price += (products[itemId].count * products[itemId].salePrice);
            }
        });
    });
    return price.toFixed(2);
};

const isProviderSelectedAll = (products) => {
    return Object.keys(products).every(itemId => {
        if (products[itemId].selected) {
            return true;
        } else {
            return false;
        }
    })
};

const isProductsSelectedAll = (shopCarState) => {
    const providerIds = Object.keys(shopCarState);
    if (providerIds.length === 0) return false;

    return providerIds.every(providerId => {
        let products = shopCarState[providerId].products;
        let itemIds = Object.keys(products);
        if (itemIds.length === 0) return false;

        return itemIds.every(itemId => {
            if (products[itemId].selected) {
                return true;
            } else {
                return false;
            }
        });
    })
};


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

    handleDeleteProduct() {
        const {providerId, itemId, shopCarActions} = this.props;
        shopCarActions.deleteItem(providerId, itemId);
    }

    handleSelectedProduct(e) {
        const {providerId, itemId, shopCarActions} = this.props;
        shopCarActions.selectItem(providerId, itemId);
    }

    handleNumberBoxChange(value) {
        const {providerId, itemId, shopCarActions} = this.props;
        shopCarActions.editItem(providerId, itemId, value);
    }

    componentDidMount() {
        this.setState({
            maxTranslateX: -this.refs.operate.offsetWidth
        })
    }

    render() {
        const {itemId, product} = this.props;

        return (
            <div ref="product" className="product_item"
                 onTouchStart={this.handleTouchStart.bind(this)}
                 onTouchMove={this.handleTouchMove.bind(this)}
                 onTouchEnd={this.handleTouchEnd.bind(this)}>
                <div className="product_check">
                    <input id={"product_" + itemId} type="checkbox" className="hidden" checked={product.selected}
                           onChange={this.handleSelectedProduct.bind(this)}/>
                    <label htmlFor={"product_" + itemId} className="check_box"/>
                </div>
                <div className="product_detail">
                    <span className="product_img">
                        <img src={product.imgUrl} alt=""/>
                    </span>
                    <p className="product_title">{product.title}</p>
                    <p className="product_selected">已选：{product.standard} {product.model}</p>
                    <NumberBox initCount={product.count} countMax={product.stock}
                               onChange={this.handleNumberBoxChange.bind(this)}/>
                </div>
                <div className="product_price">
                    <div className="old_price">{product.price}</div>
                    <div className="cur_price">{product.salePrice}</div>
                </div>
                <div ref="operate" className="product_operate" onTouchStart={this.handleDeleteProduct.bind(this)}>删除
                </div>
                <a href="javascript:;" className="product_delete" onClick={this.handleDeleteProduct.bind(this)}><i
                    className="icon icon_delete"/></a>
            </div>
        )
    }
}

class ProviderItem extends React.Component {

    handleSelectAll(e) {
        const {providerId, shopCarActions} = this.props;
        if (e.nativeEvent.target.checked) {
            shopCarActions.selectAll(providerId);
        } else {
            shopCarActions.clearSelected(providerId);
        }
    }

    render() {
        const {providerId, providerItem, shopCarActions} = this.props;
        return (
            <dl className="provider_item">
                <dt className="provider_title">
                    <input id={"provider_" + providerId} type="checkbox" className="hidden"
                           checked={isProviderSelectedAll(providerItem.products)}
                           onChange={this.handleSelectAll.bind(this)}/>
                    <label htmlFor={"provider_" + providerId} className="check_box"/>
                    <i className="icon icon_store_icon"/>
                    <div>{providerItem.providerName}</div>
                </dt>
                <dd className="product_items">
                    {
                        Object.keys(providerItem.products).map(itemId => {
                            const product = providerItem.products[itemId];
                            return (
                                <ProductItem key={itemId} providerId={providerId} itemId={itemId} product={product}
                                             shopCarActions={shopCarActions}/>
                            )
                        })
                    }
                </dd>
            </dl>
        )
    }
}

class ShopCar extends React.Component {

    handleSelectAll(e) {
        const {shopCarActions} = this.props;
        if (e.nativeEvent.target.checked) {
            shopCarActions.selectAll();
        } else {
            shopCarActions.clearSelected();
        }
    }

    render() {
        const {shopCarState, shopCarActions} = this.props;
        return (
            <div className="shop_car_list">
                <div className="product_list">
                    {
                        Object.keys(shopCarState).map(function (providerId) {
                            const providerItem = shopCarState[providerId];
                            return (
                                <ProviderItem key={providerId} providerId={providerId}
                                              providerItem={providerItem}
                                              shopCarActions={shopCarActions}/>
                            )
                        }.bind(this))
                    }
                </div>
                <div className="count_toolbar">
                    <div className="check_all">
                        <input id="check_all_btn" type="checkbox" className="hidden"
                               checked={isProductsSelectedAll(shopCarState)}
                               onChange={this.handleSelectAll.bind(this)}/>
                        <label htmlFor="check_all_btn" className="check_box">全选</label>
                    </div>
                    <div className="total_price">合计：￥{getProductsPrice(shopCarState)}</div>
                    <div className="settle_btn">
                        <i className="icon icon_dollar"/>&nbsp;
                        <span>去结算({getProductsCount(shopCarState)})</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopCar
