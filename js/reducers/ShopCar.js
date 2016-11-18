/**
 * Created by 断崖 on 2016/11/9.
 */

import {ADD_TODO, EDIT_TODO, DELETE_TODO, SELECT_TODO, SELECT_ALL, CLEAR_SELECT} from "../constants/ShopCarActionTypes"

const initialState = [
    {
        "products": []
    }
];

export default function shopCar(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
                },
                ...state
            ];

        case EDIT_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            );

        case DELETE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, text: action.text} :
                    todo
            );

        case SELECT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, completed: !todo.completed} :
                    todo
            );

        case SELECT_ALL:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }));

        case CLEAR_SELECT:
            return state.filter(todo => todo.completed === false)

        default:
            return state
    }
}
