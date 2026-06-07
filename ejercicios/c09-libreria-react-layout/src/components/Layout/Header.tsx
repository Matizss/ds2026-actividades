import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="py-3 sticky-top bg-primary-subtle"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center gap-2"
        >
          <img src="/img/logo.png" width="35" height="29" />
          Mi librería
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarText" />

        <Navbar.Collapse id="navbarText">
          <Nav className="ms-auto mb-2 mb-lg-0 fs-6">
            <Nav.Link href="#" active>
              Inicio
            </Nav.Link>
            <Nav.Link href="#">Catálogo</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;