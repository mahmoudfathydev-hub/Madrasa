import { configureStore } from '@reduxjs/toolkit';
import filterCategoriesReducer from './Slices/filtercategories.js';
import sortReducer from "./Slices/sortSlice.js";
import iconReducer from "./Slices/iconSlice.js"

export const store = configureStore({
    reducer: {
        filterCategories: filterCategoriesReducer,
        sort: sortReducer,
        style: iconReducer,
    },
});
