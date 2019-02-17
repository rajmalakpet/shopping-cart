import CartReducer from './taskReducer'

describe('CartReducer reducer', () => {

  it('<=== should handle initial state', () => {
    expect(CartReducer(undefined, {})).toEqual({
        productInventory: [
            {id: 1, "title": "TV", "price": 11500.01, "inventory": 5},
            {id: 2, "title": "Fridge", "price": 11110.99, "inventory": 20},
            {id: 3, "title": "Mobile", "price": 1119.99, "inventory": 5}
        ],
        cartList: []
    })
  })

  it('<=== should handle ADD_CART', () => {
    expect(CartReducer({"cartList": [{"id": 1, "inventory": 5, "price": 11500.01, "title": "TV"}], "productInventory": [{"id": 1, "inventory": 4, "price": 11500.01, "title": "TV"}, {"id": 2, "inventory": 20, "price": 11110.99, "title": "Fridge"}, {"id": 3, "inventory": 5, "price": 1119.99, "title": "Mobile"}]}, {id: 1, "title": "TV", "price": 11500.01, "inventory": 5} )).toEqual({ productInventory: [{id: 1, "title": "TV", "price": 11500.01, "inventory": 4},{id: 2, "title": "Fridge", "price": 11110.99, "inventory": 20},{id: 3, "title": "Mobile", "price": 1119.99, "inventory": 5}],cartList: [{id: 1, "title": "TV", "price": 11500.01, "inventory": 5}] })
  })

})
