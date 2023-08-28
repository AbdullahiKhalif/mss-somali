import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./Features/Modal/modalSlice";
export const store =  configureStore({
    reducer:{
        modal: ModalReducer
    }
})