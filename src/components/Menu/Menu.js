import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '../../contexts/ThemeContext'; // not necessary
import { toggleTheme } from '../../slices/theme';

import './Menu.css';

function Menu() {
    // This is not necessary as we are using the state from Redux store
    // const { theme, toggleTheme, contrastTheme } = useContext(ThemeContext); // { theme: 'light', toggleTheme: fn(), ... }
    // const { theme, toggleTheme, contrastTheme } = useTheme();

    const dispatch = useDispatch();
    const { value, contrastValue } = useSelector(state => state.theme); // this step also subscribes to the store, and the component will be re-rendered whenever the selected value (state.theme) changes

    return (
        <Navbar collapseOnSelect expand="lg" className={`bg-${value}`}>
            <Container>
                <Navbar.Brand to="/" as={NavLink} target="_blank" className={`text-${contrastValue}`}>Workshops App</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink} end className={`text-${contrastValue}`}>Home</Nav.Link>
                        <Nav.Link to="/workshops" as={NavLink} end className={`text-${contrastValue}`}>List of workshops</Nav.Link>
                        <Nav.Link to="/workshops/add" as={NavLink} className={`text-${contrastValue}`}>Add a workshop</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" onClick={() => {
                            toggleTheme(); // not necessary
                            dispatch(toggleTheme());
                        }} className={`text-${contrastValue}`}>Change theme</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Menu;