import { createContext } from 'react';

// the default context value can be passed as an argument
const ThemeContext = createContext({
    theme: 'dark',
});

export default ThemeContext;