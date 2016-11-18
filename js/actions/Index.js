/**
 * Created by 断崖 on 2016/11/9.
 */

import * as types from '../constants/ShopCarActionTypes'

export const addProduct = text => ({type: types.ADD_TODO, text});
export const deleteProduct = id => ({type: types.DELETE_TODO, id});
export const editProduct = (id, text) => ({type: types.EDIT_TODO, id, text});
export const selectProduct = id => ({type: types.SELECT_TODO, id});
export const selectAll = () => ({type: types.SELECT_ALL});
export const clearSelect = () => ({type: types.CLEAR_SELECT});
