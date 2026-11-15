import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SinPermiso() {
  return (
    <div className="container py-5" style={{ maxWidth: 500 }}>
      <Alert variant="warning">
        <Alert.Heading>No tenés permiso para ver esta página</Alert.Heading>
        <p className="mb-0">
          Tu cuenta no tiene el rol necesario para esta operación. Si creés que es un error,
          contactá a un administrador.
        </p>
      </Alert>
      <Link to="/catalogo" className="btn btn-primary">
        Volver al catálogo
      </Link>
    </div>
  );
}

export default SinPermiso;