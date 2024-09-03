/* in v5, we use Switch in place of Routes */
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Menu from "./components/Menu/Menu";
import HomePage from "./pages";
import WorkshopsListPage from './pages/workshops';
import WorkshopDetailsPage from './pages/workshops/[id]';
import AddWorkshopPage from './pages/workshops/';


// sfc
const App = () => {
    return (
        <>
            <Menu />

            <Container className="my-4">
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<WorkshopsListPage />} path="/workshops" />
                    <Route element={<WorkshopDetailsPage />} path="/workshops/:id/*" />
                    <Route element={<AddWorkshopPage />} path="/workshops/add" />
                </Routes>
            </Container>
        </>
    );
}

export default App;