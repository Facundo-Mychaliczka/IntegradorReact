import {createSlice} from '@reduxjs/toolkit'
import { addQuantityItemToCart, deleteAllCartProducts, deleteItemFromCart, substractQuantityItemFromCart } from './cart-functions'

const INITIAL_STATE = {
    cartItems: [],
    hidden: true,
}

const cartSlice = createSlice ({
    name: 'cart', 
    initialState: INITIAL_STATE,
    reducers: {
        // AGREGAR UNIDAD O PRODUCTO DEL CARRITO
        addQuantityToCart: (state, action) => {
            return {
                ...state,
                cartItems: addQuantityItemToCart(state.cartItems, action.payload)
            }
        },
        // REMOVER CANTIDAD DEL CARRITO
        removeQuantityFromCart: (state, action) => {
            return {
                ...state,
                cartItems: substractQuantityItemFromCart(state.cartItems, action.payload),
            }
        },

        // ELIMINAR UN SOLO PRODUCTO DEL CARRITO

        removeFromCart : (state, action) => {
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }
        },

        // LIMPIAR TODO EL CARRITO
        clearCart: (state) => {
            return {
                ...state,
                cartItems: deleteAllCartProducts(state.cartItems),
            }
        },
        // TOGGLE DE APERTURA Y CIERRE
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            }
        }
    }
})

export const {
    addQuantityToCart,
    removeQuantityFromCart,
    removeFromCart,
    clearCart,
    toggleHiddenCart
} = cartSlice.actions;

export default cartSlice.reducer;
