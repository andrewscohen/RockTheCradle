import { fetch } from './csrf';

// Initial State
const initialState = {
    product: []
}

// Action Variable
const SET_PRODUCTS = 'products/setProducts';

// Action
const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
})

// Thunk
export const getAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products')
    dispatch(setProducts(response.data))
}



// Reducer
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            const productsList = Object.assign({}, {
                products: action.products
            })
            return productsList;
        default:
            return state;
    }
}


export default productReducer;
