import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budget/budgetSlice";
// import petsReducer from "../features/pets/petsSlice";
import { petsApi } from "../app/services/petsApi";

// configureStore is a
// wrapper around createStore but sets it up with defaults
// sets up redux-dev-tools
// adds Thunk middleware

export const store = configureStore({
  // will automatically call combineReducers
  // will have state.pets, state.budget
  reducer: {
    budget: budgetReducer,
    // pets: petsReducer
    [petsApi.reducerPath]: petsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(petsApi.middleware);
  },
});
