import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    // initialState: initialState
    initialState,
    reducers: {
        // toggleTheme action
        toggleTheme(state, action) { // { type: 'theme/toggleTheme' }
            // Immer JS is used under-the-hood -> the state is not the real state object (a draft state is created and passed)
            state.value = state.value === 'light' ? 'dark' : 'light'
        },
        // other actions...
    }
});

// the actions creators
export const { toggleTheme } = themeSlice.actions;

// function toggleTheme() {
//     return {
//         type: 'theme/toggleTheme'
//     };
// }

// reducer
export default themeSlice.reducer;