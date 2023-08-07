import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },

     addfive : (state) =>{
        state.value += 5
     } , 
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , addfive } = counterSlice.actions

export default counterSlice.reducer