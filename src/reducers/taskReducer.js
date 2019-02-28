
export let initialData = {
    productInventory: [
        {id: 1, "title": "TV", "price": 599, "inventory": 5, "imgURL": "http://cdn.shopify.com/s/files/1/2660/5202/products/c6zyudairdkryrsnczsh_800x.jpg?v=1537236911"},
        {id: 2, "title": "Laptop", "price": 1599, "inventory": 20, "imgURL": "https://i5.walmartimages.com/asr/443597be-ace9-44b7-ba95-328333f67714_1.a952d45b3cfde8b02bdf859234b2cb19.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF"},
        {id: 3, "title": "Mobile", "price": 899, "inventory": 5, "imgURL": "https://static.toiimg.com/img/66012327/Master.jpg"}
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