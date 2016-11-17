/**
 * Created by 断崖 on 2016/11/10.
 */

import React from "react"
import {Link} from 'react-router';

import ShopCarPop from '../../plugin/ShopCarPop'

let data = {
    "product": {
        "id": 666666,
        "title": "测试",
        "imgUrl": null,
        "price": 9998,
        "salePrice": 998,
        "items": [
            {
                "standard": "290g/罐",
                "itemDataList": [
                    {
                        "id": 1382,
                        "commodityId": 2183,
                        "model": "21",
                        "price": 318.0,
                        "salePrice": 116.0,
                        "stock": 333
                    },
                    {
                        "id": 999,
                        "commodityId": 2183,
                        "model": "22",
                        "price": 328.0,
                        "salePrice": 126.0,
                        "stock": 333
                    }
                ]
            },
            {
                "standard": "280g/罐",
                "itemDataList": [
                    {
                        "id": 1383,
                        "commodityId": 2183,
                        "model": "3",
                        "price": 66.0,
                        "salePrice": 6.0,
                        "stock": 111
                    }
                ]
            },
            {
                "standard": "500g/罐",
                "itemDataList": [
                    {
                        "id": 1386,
                        "commodityId": 2183,
                        "model": "",
                        "price": 777.0,
                        "salePrice": 77.0,
                        "stock": 999
                    }
                ]
            }
        ]
    },
    "onSubmit": function (data) {
        console.dir(data);
    }
};

class ProductItem extends React.Component {
    addShopBag() {
        ShopCarPop.showShopCar(data);
    }

    render() {
        return (
            <div className="product_item">
                <Link to="/" className="item_image"><img src={this.props.product.img} alt=""/></Link>
                <div className="detail_box">
                    <p className="item_name">{this.props.product.name}</p>
                    <p className="sale_price">{this.props.product.salePrice}</p>
                    <p className="price">{this.props.product.price}</p>
                </div>
                <Link className="shop_bag" onClick={this.addShopBag.bind(this)}><i
                    className="icon icon_shop_bag"/></Link>
            </div>
        )
    }
}


class ProductBox extends React.Component {
    static defaultProps = {
        productList: [
            {
                "id": 1,
                "name": "保湿补水乳",
                "img": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/CixFmlcgeEmARgAvAAB6jRXpgDA111.jpg",
                "price": "160.99",
                "salePrice": "99.00"
            },
            {
                "id": 2,
                "name": "美颜面膜",
                "img": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/Cq3BIVcgeE2Ae7gCAAKk9tsNuMo326.jpg",
                "price": "66.99",
                "salePrice": "58.00"
            },
            {
                "id": 3,
                "name": "祛痘洁面乳",
                "img": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/CixFmlcgeFCAZos-AAFjNssKPJI844.jpg",
                "price": "99.00",
                "salePrice": "80.99"
            },
            {
                "id": 4,
                "name": "保湿补水乳",
                "img": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/Cq3BIVcgeFSAJyHMAAF9Ko3Y0nM868.jpg",
                "price": "160.99",
                "salePrice": "99.00"
            },
            {
                "id": 5,
                "name": "保湿补水乳",
                "img": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/CixFmlcgeFmAMLHuAAHXq2XOfys700.jpg",
                "price": "160.99",
                "salePrice": "99.00"
            }
        ]
    };

    render() {
        return (
            <div className="product_items">
                {
                    this.props.productList.map(function (product, index) {
                        return (
                            <ProductItem product={product} key={index}/>
                        )
                    })
                }
                <div className="product_item_space">&nbsp;</div>
                <div className="product_item_space">&nbsp;</div>
                <div className="product_item_space">&nbsp;</div>
                <div className="product_item_space">&nbsp;</div>
            </div>
        )
    }
}

export default ProductBox
