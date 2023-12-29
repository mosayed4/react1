import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itmes: [],
};

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addtocart:(state,action)=>{ state.itmes += action.payload
    addtocart: (state, action) => {
      state.itmes.push(action.payload);
      console.log(state.itmes);
    }
  },
});
