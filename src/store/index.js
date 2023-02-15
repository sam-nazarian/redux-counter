import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// A slice of our global state
const counterSlice = createSlice({
  name: 'counter', //identifier of this state
  initialState,
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

// similar to createStore but makes merging multiple reducers into one reducer easier
const store = configureStore({
  // reducer: { counter: counterSlice.reducer }, //multiple state slices (a map of reducers) which will be merged into 1 big reducer
  reducer: counterSlice.reducer, //one main global reducer
});

export const counterActions = counterSlice.actions;

export default store;
