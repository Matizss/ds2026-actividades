function Footer() {
  return (
    <footer className="bg-primary-subtle text-center py-4 mt-auto">
      <div className="container">
        <p className="text-body-secondary mb-0 fs-7">
          © {new Date().getFullYear()} Mi Librería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;