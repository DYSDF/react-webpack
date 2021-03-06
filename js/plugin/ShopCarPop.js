/**
 * Created by Jay on 16/11/11.
 */
import React from "react";
import ReactDOM from "react-dom";

import MaskPop from "./MaskPop";
import NumberBox from "../components/NumberBox";

let shopCar;
let modelList = {};
let hashMap = {};

const StrToNode = (str = "") => {
    let parentNode = document.createElement("div");
    parentNode.innerHTML = str;
    return parentNode.childNodes;
};

const renderModelTemplate = (list) => {
    let html = "";
    list.forEach((item, index) => {
        if (item) {
            html += `<span class="radio_box">
                        <input type="radio" id="model-${index}" name="model" value="${item}">
                        <label for="model-${index}">${item}</label>
                    </span>`;
        }
    });

    if (html) {
        return `<dt>型号</dt>
                <dd class="models">${html}</dd>`;
    } else {
        return "";
    }
};

const renderStandardTemplate = (list) => {
    let html = "";
    list.forEach((item, index) => {
        html += `<span class="radio_box">
                    <input type="radio" id="standard-${index}" name="standard" value="${item}">
                    <label for="standard-${index}">${item}</label>
                </span>`;
    });

    return `<dt>规格</dt>
            <dd class="standards">${html}</dd>`;
};

const renderShopCarTemplate = (product) => {
    return `<div class="shop_car_pop">
                <input type="hidden" name="productId" value="${product.commodityId}">
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
                    <div class="item_box standards_box">${renderStandardTemplate(Object.keys(hashMap))}</div>
                    <div class="item_box models_box">${renderModelTemplate(Object.keys(modelList))}</div>
                    <div class="item_box shop_count">
                        <input type="hidden" name="shopCount" value="0">
                        <dt>数量</dt>
                        <dd></dd>
                    </div>
                </div>
                <a href="javascript:;" class="submit_btn">加入购物车</a>
                <a href="javascript:;" class="close_btn"><i class="icon icon_close"></i></a>
            </div>`;
};

const createHashMap = (product) => {
    try {
        product.items.forEach(standard => {
            standard.itemDataList.forEach(model => {
                if (!hashMap[standard.standard]) {
                    hashMap[standard.standard] = {};
                }
                modelList[model.model] = {...model};
                hashMap[standard.standard][model.model] = {
                    ...model,
                    standard: standard.standard,
                    providerId: product.providerId,
                    providerName: product.providerName,
                    title: product.title,
                    imgUrl: product.imgUrl
                };
            })
        });
    } catch (e) {
        return false;
    }
    return true;
};

const createShopCar = (product) => {
    if (createHashMap(product)) {
        let htmlStr = renderShopCarTemplate(product);
        return StrToNode(htmlStr)[0];
    } else {
        return "";
    }
};

const onSubmitFn = (callbackObj) => {
    let standardValue = document.querySelector(".shop_car_pop input[name='standard']:checked").value;
    let modelValue = document.querySelector(".shop_car_pop input[name='model']:checked") ? document.querySelector(".shop_car_pop input[name='model']:checked").value : "";
    let count = parseInt(document.querySelector(".shop_car_pop .number_box .value").value) || 1;

    callbackObj({
        ...hashMap[standardValue][modelValue],
        count: count
    });
};

const setCheckEnable = (defaultSelect) => {
    if (defaultSelect) {
        if (defaultSelect.standard) {
            document.querySelector(".shop_car_pop input[value='" + defaultSelect.standard + "']").checked = true;
        } else {
            document.querySelector(".shop_car_pop input[name='standard']").checked = true;
        }
    }

    let standardValue = document.querySelector(".shop_car_pop input[name='standard']:checked").value;
    window.setTimeout(function () {
        [].forEach.call(document.querySelectorAll(".shop_car_pop input[name='model']"), (item) => {
            let modelValue = item.value;
            if (hashMap[standardValue]) {
                if (hashMap[standardValue][modelValue]) {
                    item.disabled = false;
                } else {
                    item.checked = "";
                    item.disabled = true;
                }
            } else {
                item.checked = "";
                item.disabled = true;
            }
        });

        if (defaultSelect && defaultSelect.model) {
            document.querySelector(".shop_car_pop input[name='model'][value='" + defaultSelect.model + "']").checked = true;
        } else {
            if (!document.querySelector(".shop_car_pop input[name='model']:checked")) {
                let list = document.querySelectorAll(".shop_car_pop input[name='model']");
                for (let i = 0; i < list.length; i++) {
                    if (!list[i].disabled) {
                        list[i].checked = "checked";
                        return;
                    }
                }
            }
        }
    }.bind(this), 0)
};

const initFn = ({product, defaultSelect = {}, onSubmit} = {}) => {
    let el = createShopCar(product);
    shopCar = document.body.appendChild(el);

    ReactDOM.render(
        React.createElement(NumberBox, {
            initCount: 1,
            countMax: 99,
            countMin: 1
        }),
        document.querySelector(".shop_car_pop .shop_count")
    );

    [].forEach.call(document.querySelectorAll(".shop_car_pop input"), (item) => {
        item.onclick = () => {
            setCheckEnable();
        };
    });
    setCheckEnable(defaultSelect);

    document.querySelector(".shop_car_pop .submit_btn").onclick = () => {
        return onSubmitFn(onSubmit);
    };

    document.querySelector(".shop_car_pop .close_btn").onclick = closeShopCar;

    MaskPop.showMask({
        onClose: () => {
            closeShopCar();
        }
    });
};

const showShopCar = (args) => {
    if (!shopCar) {
        initFn(args);
    }
    shopCar.style.display = "";
};

const closeShopCar = () => {
    if (shopCar) {
        document.body.removeChild(shopCar);
        shopCar = null;
    }
    MaskPop.hideMask();
};

export default {
    showShopCar,
    closeShopCar
}
