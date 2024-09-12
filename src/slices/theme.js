import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    // initialState: initialState
    initialState,
    reducers: {
        toggleTheme(state, action) { // { type: 'theme/toggleTheme' }
            // Immer JS is used under-the-hood -> the state is not the real state object (a draft state is created and passed)
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
});

// the actions creators
export const { toggleTheme } = themeSlice.actions;

// reducer
export default themeSlice.reducer;