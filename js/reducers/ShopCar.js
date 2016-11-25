import {
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    SELECT_ITEM,
    SELECT_ALL,
    CLEAR_SELECTED
} from '../constants/ShopCarActionTypes'


const deepCopy = (source) => { // JavaScript居然没有深拷贝。。。
    let result;
    if (source.constructor == Array) {
        result = [];
    } else {
        result = {};
    }
    Object.keys(source).forEach(key => {
        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    });
    return result;
};

const initialState = {
    // 658: { // providerId
    //     providerName: "供应商",
    //     products: {
    //         123: { // itemId
    //             standard: "规格",
    //             model: "型号",
    //             price: 12.99,
    //             salePrice: 9.99,
    //             stock: 99,
    //             count: 99,
    //             productId: 1459,
    //             title: "美容针",
    //             selected: false
    //         }
    //     }
    // }
};

export default function shopCar(state = initialState, action) {
    let stateCopy = deepCopy(state);
    switch (action.type) {
        case ADD_ITEM:
            if (stateCopy[action.product.providerId]) {
                let products = stateCopy[action.product.providerId].products;
                if (products[action.product.itemId]) {
                    let product = products[action.product.itemId];
                    product.count = product.count * 1 + 1
                } else {
                    products[action.product.itemId] = {
                        ...action.product,
                        count: 1,
                        selected: false
                    }
                }
            } else {
                let products = {};
                products[action.product.itemId] = {
                    ...action.product,
                    count: 1,
                    selected: false
                };
                stateCopy[action.product.providerId] = {
                    providerName: action.product.providerName,
                    products: products
                }
            }
            return stateCopy;

        case DELETE_ITEM:
            if (stateCopy[action.product.providerId]) {
                let products = stateCopy[action.product.providerId].products;
                if (products[action.product.itemId]) {
                    delete products[action.product.itemId];
                    if (Object.keys(products).length === 0) {
                        delete stateCopy[action.product.providerId];
                    }
                }
            }
            return stateCopy;

        case EDIT_ITEM:
            if (stateCopy[action.product.providerId]) {
                let products = stateCopy[action.product.providerId].products;
                if (products[action.product.itemId]) {
                    let product = products[action.product.itemId];
                    product.count = action.product.count
                }
            }
            return stateCopy;

        case SELECT_ITEM:
            if (stateCopy[action.product.providerId]) {
                let products = stateCopy[action.product.providerId].products;
                if (products[action.product.itemId]) {
                    let product = products[action.product.itemId];
                    product.selected = !product.selected;
                }
            }
            return stateCopy;

        case SELECT_ALL:
            if (action.product.providerId) {
                if (stateCopy[action.product.providerId]) {
                    let products = stateCopy[action.product.providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = true;
                    })
                }
            } else {
                Object.keys(stateCopy).forEach(providerId => {
                    let products = stateCopy[providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = true;
                    })
                })
            }
            return stateCopy;

        case CLEAR_SELECTED:
            if (action.product.providerId) {
                if (stateCopy[action.product.providerId]) {
                    let products = stateCopy[action.product.providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = false;
                    })
                }
            } else {
                Object.keys(stateCopy).forEach(providerId => {
                    let products = stateCopy[providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = false;
                    })
                })
            }
            return stateCopy;

        default:
            return stateCopy
    }
}
