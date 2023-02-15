import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// A slice of our global state
const counterSlice = createSlice({
  name: 'counter', //identifier of this state
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //behinde the scenes immer will automatically edit this state in an immutable way (without muting the original state)
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
