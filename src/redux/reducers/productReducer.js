import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "Shehan",
        category: "Programmer"
    }]
}

export const productReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return state;

        default:
            return state;
    }
} 