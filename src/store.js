import { createStore } from 'redux';

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/theme';

// --- Old API ---
// you create a big reducer (root reducer) using combineReducers() API

// const rootReducer = combineReducers({
//     // have one property for every slice / reducer
//     theme: themeReducer,
//     // other reducers created through other slices...
//     // user: userReducer // { prime: true, lastViewedProducts: [ ...] }
// });

// const store = createStore(rootReducer)

// --- New API ---
/*
// You have many slices in general, i.e. many pieces of the state. This creates a glocal state
Global state
{
    theme: {
        value: 'light',
    },
    user: {
        prime: true,
        lastViewedProducts: [ ...]
    }
}
*/
const store = configureStore({
    reducer: {
        // have one property for every slice / reducer
        theme: themeReducer,
        // other reducers created through other slices...
        // user: userReducer // { prime: true, lastViewedProducts: [ ...] }
    }
});

export default store;