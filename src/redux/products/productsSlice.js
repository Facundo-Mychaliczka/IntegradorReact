import { createSlice } from "@reduxjs/toolkit";
import { Products, TotalProducts } from "../../assets/data/Products/ProductsData";

const INITIAL_STATE = {
    products: Products,
    totalProducts: TotalProducts
}

export const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state
        }
    }
})

export const {getProducts} = productsSlice.actions

export default productsSlice.reducer