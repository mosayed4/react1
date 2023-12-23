import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./cartslice";
   export const store = configureStore ({
      reducer : cartslice.reducer
         
     
    })


   //  export default  store