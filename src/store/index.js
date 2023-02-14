import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
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
