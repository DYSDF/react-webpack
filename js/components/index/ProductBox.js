/**
 * Created by 断崖 on 2016/11/10.
 */

import React from "react"
import {Link} from 'react-router';

import ShopCarPop from "../../plugin/ShopCarPop";

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
        // providerId, providerName, itemId, standard, model, price, salePrice, productId, title, imgUrl, stock
        let product = this.props.product;
        this.props.actions.addItem(
            product.providerId,
            product.providerName,
            product.commodityId,
            "规格",
            "型号",
            "16.99",
            "9.99",
            product.commodityId,
            product.title,
            product.imgUrl,
            99
        )
    }

    render() {
        return (
            <div className="product_item">
                <Link to="/" className="item_image"><img src={this.props.product.imgUrl} alt=""/></Link>
                <div className="detail_box">
                    <p className="item_name">{this.props.product.title}</p>
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
                "providerId": 123,
                "providerName": "测试1",
                "commodityId": 1,
                "title": "测试",
                "imgUrl": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/CixFmlcgeEmARgAvAAB6jRXpgDA111.jpg",
                "price": "9998",
                "salePrice": "998",
                "items": [
                    {
                        "standard": "290g/罐",
                        "itemDataList": [
                            {
                                "id": 1111,
                                "commodityId": 2183,
                                "model": "21",
                                "price": 318.0,
                                "salePrice": 116.0,
                                "stock": 333
                            },
                            {
                                "id": 1112,
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
                                "id": 1113,
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
                                "id": 1114,
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
            {
                "providerId": 321,
                "providerName": "测试2",
                "commodityId": 2,
                "title": "美颜面膜",
                "imgUrl": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/Cq3BIVcgeE2Ae7gCAAKk9tsNuMo326.jpg",
                "price": "66.99",
                "salePrice": "58.00",
                "items": [
                    {
                        "standard": "290g/罐",
                        "itemDataList": [
                            {
                                "id": 2221,
                                "commodityId": 2183,
                                "model": "21",
                                "price": 318.0,
                                "salePrice": 116.0,
                                "stock": 333
                            },
                            {
                                "id": 2222,
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
                                "id": 2223,
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
                                "id": 2224,
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
            {
                "providerId": 123,
                "providerName": "测试1",
                "commodityId": 3,
                "title": "祛痘洁面乳",
                "imgUrl": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/CixFmlcgeFCAZos-AAFjNssKPJI844.jpg",
                "price": "99.00",
                "salePrice": "80.99",
                "items": [
                    {
                        "standard": "290g/罐",
                        "itemDataList": [
                            {
                                "id": 3331,
                                "commodityId": 2183,
                                "model": "21",
                                "price": 318.0,
                                "salePrice": 116.0,
                                "stock": 333
                            },
                            {
                                "id": 3332,
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
                                "id": 3333,
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
                                "id": 3334,
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
            {
                "providerId": 666,
                "providerName": "测试6",
                "commodityId": 4,
                "title": "保湿补水乳",
                "imgUrl": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/Cq3BIVcgeFSAJyHMAAF9Ko3Y0nM868.jpg",
                "price": "160.99",
                "salePrice": "99.00",
                "items": [
                    {
                        "standard": "290g/罐",
                        "itemDataList": [
                            {
                                "id": 4441,
                                "commodityId": 2183,
                                "model": "21",
                                "price": 318.0,
                                "salePrice": 116.0,
                                "stock": 333
                            },
                            {
                                "id": 4442,
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
                                "id": 4443,
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
                                "id": 4444,
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
            {
                "providerId": 555,
                "providerName": "测试5",
                "commodityId": 5,
                "title": "保湿补水乳",
                "imgUrl": "http://img.wmwbeautysalon.com/group1/M00/0A/DB/CixFmlcgeFmAMLHuAAHXq2XOfys700.jpg",
                "price": "160.99",
                "salePrice": "99.00",
                "items": [
                    {
                        "standard": "290g/罐",
                        "itemDataList": [
                            {
                                "id": 5551,
                                "commodityId": 2183,
                                "model": "21",
                                "price": 318.0,
                                "salePrice": 116.0,
                                "stock": 333
                            },
                            {
                                "id": 5552,
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
                                "id": 5553,
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
                                "id": 5554,
                                "commodityId": 2183,
                                "model": "",
                                "price": 777.0,
                                "salePrice": 77.0,
                                "stock": 999
                            }
                        ]
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <div className="product_items">
                {
                    this.props.productList.map(function (product, index) {
                        return (
                            <ProductItem product={product} key={index} actions={this.props.shopCarActions}/>
                        )
                    }.bind(this))
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
