import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

const favoritesSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            state.value.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter((item) => item !== action.payload)
        }
    }
})

export const { addFavorites, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer