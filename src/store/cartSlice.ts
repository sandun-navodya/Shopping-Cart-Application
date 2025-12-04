import { createSlice } from "@reduxjs/toolkit";
import type { ICartSliceState } from "../types/products";

// interface Icartstate {
//     Products: Iproduct[];
// }

const initialState: ICartSliceState = {
    Products: [],
};



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const existing = state.Products.find(
                (product) => product.id === action.payload.id
            );
           
            if (existing) {
                existing.new_qty += 1;
                console.log(existing.new_qty);
            }
            else {
                state.Products.push({ ...action.payload , new_qty: 1 });
            }

        },

        removefromcart: (state, action) => {
            state.Products = state.Products.filter(
                (product) => product.id !== action.payload.id
            );
            // console.log(action.payload)
        }


    }
})
export const { addtocart, removefromcart } = cartSlice.actions;

export default cartSlice.reducer;

