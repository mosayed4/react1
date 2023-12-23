import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  itmes: [],
};

export const cartslice = createSlice({
  name: "cart",
  initalState,
  reducers: {
    // addtocart:(state,action)=>{ state.itmes += action.payload
    addtocart: (state, action) => {
      state.itmes.push(action.payload);
      console.log(state.itmes);
    },
  },
});
