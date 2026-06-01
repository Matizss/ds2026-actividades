function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top bg-primary-subtle" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src="/img/logo.png" alt="Logo" width="35" height="29" />
          Mi librería
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="catalogo.html">Catálogo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contacto.html">Contacto</a>
                </li>  
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar