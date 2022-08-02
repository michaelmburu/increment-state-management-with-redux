import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { numberOfClicksReducer } from "../Redux/Reducers/reducer";

// Root reducer: Defines how individual reducers manage the overall state of the application
// Configure the root reducer to manage all reducers
const rootReducer = combineReducers({
    //Assign numberOfClicks to the numberOfClicksReducer
    numberOfClicks: numberOfClicksReducer, 
});

// create store with all reducers
export const store = configureStore({
    reducer: rootReducer
});
