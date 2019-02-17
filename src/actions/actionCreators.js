
export const ADD_CART = (item) => ({
    type: 'ADD_CART',
    item
})

export const getUniqueItems = (cartItems) => {
    return cartItems.reduce( (acc, item) => {
        const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
        filteredItem !== undefined ? filteredItem.inventory++ : acc.push({ ...item, inventory: 1 })
        return acc
    }, [] )
}