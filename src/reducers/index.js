
export const cartAddReducer = (state = [], action) => {
    console.log(action.payload);

    switch(action.type) {

        case "ADD_TO_CART":

            let cartList = [];

            cartList.find(items => items.cartObject.name === action.payload.name)

            cartList.forEach((element, index) => {
                if (element.name === action.payload.name) {
                    
                }
                
                console.log(index); 
            })

            return [...state, 
            {
                image: action.payload.image,
                name: action.payload.name,
                quantity: action.payload.quantity
            }
        ]
    default:
        return state;
    }

}