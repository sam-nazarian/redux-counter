import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// similar to createStore but makes merging multiple reducers into one reducer easier
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //multiple state slices (a map of reducers) which will be merged into 1 big reducer
  // reducer: counterSlice.reducer, //one main global reducer
});

export default store;
