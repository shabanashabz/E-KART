import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //  actions are provided inside reducers, logic to update the state
        addtoWishList:(state,action)=>{
            state.push(action.payload)
        },
        // remove item from state
        removeFromWishList:(state,action)=>{
            return state.filter(item=> item.id!= action.payload)
        }
    }
})

export const{addtoWishList,removeFromWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer;