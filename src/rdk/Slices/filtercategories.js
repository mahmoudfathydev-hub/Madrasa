import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "all",
    level: "all",
    price: "all",
};

export const filterCategories = createSlice({
    name:"filtercategory",
    initialState,
    reducers: {
        setCategory:(state, action) => {
            state.category = action.payload;
        },
        setLevel:(state, action) => {
            state.level = action.payload;
        },
        setPrice:(state, action) => {
            state.price = action.payload;
        },
        resetFilters: (state) => {
            state.category = "all";
            state.level = "all";
            state.price = "all";
        },
    },
});


export const {setCategory , setLevel , setPrice , resetFilters } = filterCategories.actions;

export default filterCategories.reducer;