import { createContext, useContext } from 'react';

// the default context value can be passed as an argument
const ThemeContext = createContext({
    theme: 'dark',
});

export const ThemeProvider = ({ children, value }) => {
    console.log(children);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);