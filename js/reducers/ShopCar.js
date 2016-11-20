import {
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    SELECT_ITEM,
    SELECT_ALL,
    CLEAR_SELECTED
} from '../constants/ShopCarActionTypes'


const initialState = {
    // 658: { // providerId
    //     providerName: "供应商",
    //     products: {
    //         123: { // itemId
    //             standard: "规格",
    //             model: "型号",
    //             price: 12.99,
    //             salePrice: 9.99,
    //             count: 99,
    //             productId: 1459,
    //             title: "美容针",
    //             selected: false
    //         }
    //     }
    // }
};

export default function shopCar(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            if(state[action.product.providerId]){
                let products = state[action.product.providerId].products;
                if(products[action.product.itemId]){
                    let product = products[action.product.itemId];
                    product.count = product.count + 1
                } else {
                    products[action.product.itemId] = {
                        standard: action.product.standard,
                        model: action.product.model,
                        price: action.product.price,
                        salePrice: action.product.salePrice,
                        count: 1,
                        productId: action.product.productId,
                        title: action.product.title,
                        selected: false
                    }
                }
            } else {
                let products = {};
                products[action.product.itemId] = {
                    standard: action.product.standard,
                    model: action.product.model,
                    price: action.product.price,
                    salePrice: action.product.salePrice,
                    count: 1,
                    productId: action.product.productId,
                    title: action.product.title,
                    selected: false
                };
                state[action.product.providerId] = {
                    providerName: action.product.providerName,
                    products: products
                }
            }
            console.log(state);
            return state;

        case DELETE_ITEM:
            if(state[action.product.providerId]){
                let products = state[action.product.providerId].products;
                if(products[action.product.itemId]){
                    let product = products[action.product.itemId];
                    if(product[count] > 1){
                        delete products[action.product.itemId]
                    } else {
                        product.count = product.count - 1
                    }
                }
            }
            return state;

        case EDIT_ITEM:
            if(state[action.product.providerId]){
                let products = state[action.product.providerId].products;
                if(products[action.product.itemId]){
                    let product = products[action.product.itemId];
                    product.count = action.product.count
                }
            }
            return state;

        case SELECT_ITEM:
            if(state[action.product.providerId]){
                let products = state[action.product.providerId].products;
                if(products[action.product.itemId]){
                    let product = products[action.product.itemId];
                    product.selected = !product.selected;
                }
            }
            return state;

        case SELECT_ALL:
            if(action.product.providerId){
                if(state[action.product.providerId]){
                    let products = state[action.product.providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = true;
                    })
                }
            } else {
                Object.keys(state).forEach(providerId => {
                    let products = state[providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = true;
                    })
                })
            }
            return state;

        case CLEAR_SELECTED:
            if(action.product.providerId){
                if(state[action.product.providerId]){
                    let products = state[action.product.providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = false;
                    })
                }
            } else {
                Object.keys(state).forEach(providerId => {
                    let products = state[providerId].products;
                    Object.keys(products).forEach(productId => {
                        products[productId].selected = false;
                    })
                })
            }
            return state;

        default:
            return state
    }
}
