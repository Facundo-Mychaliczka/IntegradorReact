import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/lib/persistStore'
import categoriesReducer from './categories/categoriesSlice'
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'



const reducers = combineReducers ({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)