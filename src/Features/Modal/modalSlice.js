import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isOpen: true,
    modalInfo: {
        name: "Abdullahi Khalif",
        age: 18,
        gender: "male"
    }
}

const ModalSlice = createSlice({
    name: "modal",
    initialState

})

export default ModalSlice.reducer;