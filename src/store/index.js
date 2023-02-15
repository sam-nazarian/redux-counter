import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// similar to createStore but makes merging multiple reducers into one reducer easier
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //multiple state slices (a map of reducers) which will be merged into 1 big reducer
  // reducer: counterSlice.reducer, //one main global reducer
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
