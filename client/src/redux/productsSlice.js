import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    items: [],
    status: null
}

export const productsFetch = createAsyncThunk(
    "products/prodctsFetch",
    async () => {
        const response = await axios.get("http://localhost:5000/products")
        return response?.data
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success",
            state.action = action.payload
        },
        [productsFetch.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default productsSlice.reducer;