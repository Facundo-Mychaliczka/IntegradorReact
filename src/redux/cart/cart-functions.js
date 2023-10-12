

export const addQuantityItemToCart = (cartItems, product) => {
    const productInCart = cartItems.find((item) => {
        return item.id === product.id
    })

    if (productInCart) {
        return cartItems.map((item) => {
          return  item.id === productInCart.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                        }
                    : item
        })
    }else{
        return [
            ...cartItems,
            {
                ...product,
                quantity: 1
            }
        ]
    }
}

export const substractQuantityItemFromCart = (cartItems, id) => {
    const productToRemoveQuantity = cartItems.find((item) => item.id === id);
    if (productToRemoveQuantity.quantity > 1) {
        return cartItems.map((item) => {
          return  item.id === productToRemoveQuantity.id
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                        }
                    : item
        })
    }else {
        if (window.confirm("¿Desea eliminar el producto del carrito?")) {
            return cartItems.filter((item) => item.id !== productToRemoveQuantity.id)
        }else{
            return cartItems
        }
        }
}

export const deleteItemFromCart = (cartItems, id) => {
    const productToRemove = cartItems.find((item) => item.id ===id) ;
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
        return cartItems.filter((item) => item.id !==productToRemove.id)
    } else {
        return cartItems
    }
}

export const deleteAllCartProducts = (cartItems) => {
    if (window.confirm("¿Desea eliminar todo su carrito?")) {
        return []
    } else {
        return cartItems
    }
}

