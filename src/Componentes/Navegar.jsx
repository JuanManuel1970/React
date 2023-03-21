import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from 'react-router-dom';

function Navegar() {
    return (
        <Nav className="container-fluid navbar">
            <Nav.Item>
                <NavLink to="/">Home</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink to="/productos">Productos</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink to="/formulario">Formulario</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink to="/about">About</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink to="/api">Api</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink to="/error">Error</NavLink>
            </Nav.Item>

            <Outlet />
        </Nav>
    );
}

export default Navegar;

