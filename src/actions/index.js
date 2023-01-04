export const addToCart = (cartObject) => {
    return {
        type: 'ADD_TO_CART',
        payload: cartObject
    }
}