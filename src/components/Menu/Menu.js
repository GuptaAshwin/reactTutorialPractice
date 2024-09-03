import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Workshops App</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink} end>Home</Nav.Link>
                        <Nav.Link to="/workshops" as={NavLink} end>List of workshops</Nav.Link>
                        <Nav.Link to="/workshops/add" as={NavLink} end>Add a workshop</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Change theme</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;