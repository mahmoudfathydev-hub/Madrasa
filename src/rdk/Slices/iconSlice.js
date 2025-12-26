import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    style: "grid",
};

const iconSlice = createSlice({
    name: "style",
    initialState,
    reducers: {
        setStyle: (state , action ) => {
            state.style = action.payload;
        },
    },
});


export const {setStyle} = iconSlice.actions;

export default iconSlice.reducer;