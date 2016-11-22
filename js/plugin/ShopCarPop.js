/**
 * Created by Jay on 16/11/11.
 */
import React from "react";
import ReactDom from "react-dom";

import MaskPop from "./MaskPop"

let shopCar;

const StrToNode = (str = "") => {
    let parentNode = document.createElement("div");
    parentNode.innerHTML = str;
    return parentNode.childNodes;
};

const renderModelTemplate = () => {
    return "";
};

const renderStandardTemplate = () => {
    return "";
};

const renderShopCarTemplate = (product) => {
    return `<div class="shop_car_pop">
                <input type="hidden" name="productId" value="${product.id}">
                <div class="product_detail">
                    <div class="product_img">
                        <img src="${product.imgUrl}" alt="">
                    </div>
                    <div class="product_detail_info">
                        <p class="product_price">${product.price}</p>
                        <p class="product_reserve"></p>
                        <p class="user_selection"></p>
                    </div>
                </div>
                <div class="product_items">
                    <div class="item_box standards_box">${renderStandardTemplate()}</div>
                    <div class="item_box models_box">${renderModelTemplate()}</div>
                    <div class="item_box">
                        <div>数量</div>
                        <div>
                            <span class="number_box">
                                <input class="select_number" type="number" name="number" min="1" max="99" value="1">
                            </span>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" class="submit_btn">加入购物车</a>
                <a href="javascript:;" class="close_btn"></a>
            </div>`;
};

const createShopCar = (product) => {
    let htmlStr = renderShopCarTemplate(product);
    return StrToNode(htmlStr)[0];
};

const showShopCar = (data) => {
    if (!shopCar) {
        let el = createShopCar(data.product);

        shopCar = document.body.appendChild(el);
    }
    MaskPop.showMask();
    shopCar.style.display = "";
};

export default {
    showShopCar
}
