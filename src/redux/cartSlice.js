import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtoCart:(state,action)=>{
            state.push(action.payload)
        },
        // remove item from state
        removeFromCart:(state,action)=>{
            return state.filter(item=> item.id!= action.payload)
        },
        emptyCart:(state)=>{
            return state = []
        }
    }
})

export const{addtoCart,removeFromCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;