import {createSlice} from '@reduxjs/toolkit'
import { addQuantityItemToCart, cartHiddenVerification, deleteAllCartProducts, deleteItemFromCart, menuHiddenVerification, substractQuantityItemFromCart } from './cart-functions'

const INITIAL_STATE = {
    cartItems: [],
    cartHidden: true,
    smallNavHidden: true,
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
        // RESETEAR EL CARRITO
        resetCart: (state) => {
            return {
                ...state,
                cartItems: []
            }
        },


        // TOGGLE DE APERTURA Y CIERRE DEL CARRITO
        toggleHiddenCart: (state) => {
            return {
                ...state,
                cartHidden: cartHiddenVerification(state.cartHidden, state.smallNavHidden),
                // cartHidden: !state.cartHidden
            }
        },
        // TOGGLE DE APERTURA Y CIERRE DEL NAV DE SMALL DVCS
        toggleHiddenNav: (state) => {
            return {
                ...state,
                smallNavHidden: menuHiddenVerification(state.cartHidden, state.smallNavHidden),
            }
        }

    }
})

export const {
    addQuantityToCart,
    removeQuantityFromCart,
    removeFromCart,
    clearCart,
    toggleHiddenCart,
    toggleHiddenNav,
    resetCart
} = cartSlice.actions;

export default cartSlice.reducer;
