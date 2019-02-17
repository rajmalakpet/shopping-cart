
export let initialData = {
    productInventory: [
        {id: 1, "title": "TV", "price": 11500.01, "inventory": 5},
        {id: 2, "title": "Fridge", "price": 11110.99, "inventory": 20},
        {id: 3, "title": "Mobile", "price": 1119.99, "inventory": 5}
    ],
    cartList: []
}

export const CartReducer = (state = initialData, action) => {
    switch(action.type){

        case 'ADD_CART':
            console.log(' from reducer ');
            console.log(action.item);
            return { 
                ...state, 
                productInventory: state.productInventory.map(
                    (content, i) => content.id === action.item.id ? {...content, inventory: content.inventory - 1 } : content
                ),
                cartList: [...state.cartList, action.item] 
             }

        default:
            return state
    }
}

export default CartReducer;