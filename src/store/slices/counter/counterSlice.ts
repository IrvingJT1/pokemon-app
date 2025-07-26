import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
}

// const initialState: CounterState = {
//   counter: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter: 10
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, 
    decrement, 
    incrementByAmount 
} = counterSlice.actions

// export default counterSlice.reducer