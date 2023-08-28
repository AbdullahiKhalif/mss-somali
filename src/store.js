import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./Features/Modal/modalSlice";
import CompetitorReducer from "./Features/Competitors/CompetitorsSlice";
export const store =  configureStore({
    reducer:{
        modal: ModalReducer,
        competitor: CompetitorReducer
    }
})