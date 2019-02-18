
export let initialData = {
    productInventory: [
        {id: 1, "title": "TV", "price": 599, "inventory": 5},
        {id: 2, "title": "Laptop", "price": 1599, "inventory": 20},
        {id: 3, "title": "Mobile", "price": 899, "inventory": 5}
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