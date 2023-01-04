export const cartAddReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            //look for if the item added is in the cart
            let cart = [];
            let foundIndex = null;
            cart.forEach((element, index) => {
                if (element.name === action.payload.name) {
                    foundIndex = index;
                }
            })
            console.log(foundIndex);
            // console.log(index);
            //if in the cart, tell me    index
            //once I have the index, I can change the value +1
            //return cart after value is changed.
            //if not in cart add item to cart with quantity of 1
            //access array and index of array - state[].quanity 
            return [...state, 
            {
                image: action.payload.image,
                name: action.payload.name,
                quanity: 1
            }
        ]
    default:
        return state;
    }

}