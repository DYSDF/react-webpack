import * as types from '../constants/ShopCarActionTypes'

export const addItem = (providerId, providerName, itemId, standard, model, price, salePrice, productId, title) => ({
    type: types.ADD_ITEM,
    product: {
        providerId,
        providerName,
        itemId,
        standard,
        model,
        price,
        salePrice,
        productId,
        title
    }
});

export const deleteItem = (providerId, itemId) => ({
    type: types.DELETE_ITEM,
    product: {
        providerId,
        itemId
    }
});

export const editItem = (providerId, itemId, count) => ({
    type: types.EDIT_ITEM,
    product: {
        providerId,
        itemId,
        count
    }
});

export const selectItem = (providerId, itemId) => ({
    type: types.SELECT_ITEM,
    product: {
        providerId,
        itemId
    }
});

export const selectAll = (providerId = null) => ({
    type: types.SELECT_ALL,
    product: {
        providerId
    }
});

export const clearSelected = (providerId = null) => ({
    type: types.CLEAR_SELECTED,
    product: {
        providerId
    }
});
