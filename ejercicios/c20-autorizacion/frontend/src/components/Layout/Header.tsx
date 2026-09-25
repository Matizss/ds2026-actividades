import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Ícono inline (sin instalar ninguna librería de íconos): "person-circle"
function IconoPersona() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  );
}

function Header() {
  const navigate = useNavigate();
  const { usuario, logout, tieneRol } = useAuth();

  const manejarSesion = () => {
    if (usuario) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <Navbar
      expand="lg"
      className="py-3 sticky-top bg-primary-subtle"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand as={Link} 
           to="/"
          className="d-flex align-items-center gap-2"
        >
          <img src="/img/logo.png" width="35" height="29" />
          Mi librería
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarText" />

        <Navbar.Collapse id="navbarText">
          <Nav className="ms-auto mb-2 mb-lg-0 fs-6 align-items-lg-center gap-lg-1">
            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo" >Ver catálogo</Nav.Link>
            <Nav.Link as={Link} to="/contacto" >Contacto</Nav.Link>
            {tieneRol('ADMIN') && (
              <Nav.Link as={NavLink} to="/libros/nuevo">Nuevo libro</Nav.Link>
            )}

            <div className="d-flex align-items-center gap-2 ms-lg-3 mt-2 mt-lg-0">
              {usuario && (
                <span className="d-flex align-items-center gap-2 text-white bg-white bg-opacity-10 rounded-pill px-3 py-1">
                  <IconoPersona />
                  Hola, {usuario.nombre}
                </span>
              )}
              <Button
                variant={usuario ? "outline-light" : "light"}
                size="sm"
                className="rounded-pill px-3 fw-semibold"
                onClick={manejarSesion}
              >
                {usuario ? 'Salir' : 'Ingresar'}
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;