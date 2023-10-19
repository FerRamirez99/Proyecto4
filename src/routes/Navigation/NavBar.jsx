import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="navbar" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/"><img src={logo} alt="Logo" className='logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="/about">Sobre Nosotros</Nav.Link>
                            <Nav.Link as={NavLink} to="/menu">Menú</Nav.Link>
                            <Nav.Link as={NavLink} to="/booking">Reserva</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar