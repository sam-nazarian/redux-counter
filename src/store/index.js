import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// A slice of our global state
createSlice({
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      // NEVER MUTATE EXISTING STATES/EXISTING OBJECTS HERE, ALWAYS UPDATE STATES IN AN IMMUTABLE MANNER (So the general approach is to make a copy of our state, mutate that copy in an immutable manner and merge it to the original state.)

      // could also do '...state' instead
      counter: state.counter + 1,
      showCounter: state.showCounter, //redux doesn't merge states, it replaces states
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter, //opposite of what it was before
      counter: state.counter, //keep existing state for counter (don't change counter)
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
