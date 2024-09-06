/* in v5, we use Switch in place of Routes */
import { useState/*, useEffect*/ } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

// import ThemeContext from './contexts/ThemeContext';
import { ThemeProvider } from './contexts/ThemeContext';

import Menu from "./components/Menu/Menu";
import HomePage from "./pages";
import WorkshopsListPage from './pages/workshops';
import WorkshopDetailsPage from './pages/workshops/[id]';
import AddWorkshopPage from './pages/workshops';

import 'react-toastify/dist/ReactToastify.css';

// sfc
const App = () => {
    // const [history, setHistory] = useState([]);

    // console.log(window.location.href);

    // useEffect(
    // () => {
    // history.push(window.location.href);
    // console.log(history);
    // },
    // [window.location.href]
    // );

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

    const value = {
        // theme: theme
        theme,
        setTheme,
        toggleTheme,
        contrastTheme: theme === 'light' ? 'dark' : 'light'
    };

    return (
        <ThemeProvider value={value}>
            <Menu />
            <ToastContainer />

            <Container className="my-4">
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<WorkshopsListPage />} path="/workshops" />
                    <Route element={<WorkshopDetailsPage />} path="/workshops/:id/*" />
                    <Route element={<AddWorkshopPage />} path="/workshops/add" />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;