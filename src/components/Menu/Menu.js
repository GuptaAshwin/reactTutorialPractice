import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import './Menu.css';

import ThemeContext from '../../contexts/ThemeContext';



function Menu() {
 
        const { theme, toggleTheme, contrastTheme } = useContext(ThemeContext); // { theme: 'light', setTheme: fn() }

        return (
            <Navbar collapseOnSelect expand="lg" className={`bg-${theme}`}>
                <Container>
                    <Navbar.Brand to="/" as={NavLink} target="_blank" className={`text-${contrastTheme}`}>Workshops App</Navbar.Brand>
    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={NavLink} end className={`text-${contrastTheme}`}>Home</Nav.Link>
                            <Nav.Link to="/workshops" as={NavLink} end className={`text-${contrastTheme}`}>List of workshops</Nav.Link>
                            <Nav.Link to="/workshops/add" as={NavLink} className={`text-${contrastTheme}`}>Add a workshop</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#" onClick={toggleTheme} className={`text-${contrastTheme}`}>Change theme</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}

export default Menu;