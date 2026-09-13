import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { z } from 'zod';
import { libroSchema } from '../schemas/libroSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiFetch } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import type { Autor, Libro } from '../types/libro';
import { useState } from 'react';

type LibroValidado = z.infer<typeof libroSchema>;

type FormInput = {
  titulo: string;
  descripcion: string;
  precio: unknown;
  img: string;
  disponible: boolean;
  autorId: unknown;
};

function LibroNuevo() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const { data: autores, loading: cargandoAutores } = useFetch<Autor[]>('/autores');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput, any, LibroValidado>({
    resolver: zodResolver(libroSchema),
    defaultValues: {
      titulo: '',
      descripcion: '',
      precio: '',
      img: '',
      disponible: true,
      autorId: '',
    },
  });

  const onSubmit = async (data: LibroValidado) => {
    setErrorApi(null);
    setEnviando(true);
    try {
      await apiFetch<Libro>('/libros', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      navigate('/catalogo');
    } catch (e) {
      setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="container py-4" style={{ maxWidth: 480 }}>
      <h2>Nuevo libro</h2>

      {errorApi && <Alert variant="danger">{errorApi}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control {...register('titulo')} isInvalid={!!errors.titulo} />
        <Form.Control.Feedback type="invalid">{errors.titulo?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} {...register('descripcion')} isInvalid={!!errors.descripcion} />
        <Form.Control.Feedback type="invalid">{errors.descripcion?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        {cargandoAutores ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <Form.Select {...register('autorId')} isInvalid={!!errors.autorId}>
            <option value="">Elegí un autor...</option>
            {(autores ?? []).map((a) => (
              <option key={a.id} value={a.id}>{a.nombre}</option>
            ))}
          </Form.Select>
        )}
        <Form.Control.Feedback type="invalid">{errors.autorId?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen (URL)</Form.Label>
        <Form.Control {...register('img')} isInvalid={!!errors.img} placeholder="https://..." />
        <Form.Control.Feedback type="invalid">{errors.img?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" {...register('precio')} isInvalid={!!errors.precio} />
        <Form.Control.Feedback type="invalid">{errors.precio?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Check className="mb-3" label="Disponible" {...register('disponible')} />

      <Button type="submit" disabled={enviando}>
        {enviando ? 'Guardando...' : 'Agregar libro'}
      </Button>
    </Form>
  );
}

export default LibroNuevo;