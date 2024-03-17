import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    current: 1
}

const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    setDog: (state, action) => {
        state.value.push(action.payload)
    },
    incCurrent: (state) => {
      state.current += 1
    },
    decCurrent: (state) => {
      state.current -= 1
    }
  }  
})

export const { setDog, incCurrent, decCurrent} = dogSlice.actions

export default dogSlice.reducer