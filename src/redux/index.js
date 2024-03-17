import { configureStore } from "@reduxjs/toolkit";
import dogReducer from './slices/dogSlice'
import favoriteReducer from './slices/favoritesSlice'

export default configureStore({
    reducer: {
        dog: dogReducer,
        favorite: favoriteReducer,
    }
})