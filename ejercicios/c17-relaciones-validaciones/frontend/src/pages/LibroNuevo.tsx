// LibroNuevo.tsx
import { useForm } from 'react-hook-form'; 
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import type { Libro } from '../types/libro';
import { z } from 'zod';
import { libroSchema } from '../schemas/libroSchema';
import { zodResolver } from '@hookform/resolvers/zod';


type LibroValidado = z.infer<typeof libroSchema>;

type FormInput = {
  titulo: string;
  autor: string;
  descripcion: string;
  precio: unknown;
  disponible: boolean;
};

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro';

interface Props {
  onAgregar: (libro: Libro) => void;
}

function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput, any, LibroValidado>({
    resolver: zodResolver(libroSchema),
    defaultValues: {
      titulo: '',
      autor: '',
      precio: '',
      descripcion: '',
      disponible: true,
    },
  });

  const onSubmit = (data: LibroValidado) => {
    onAgregar({
      id: Date.now(),
      titulo: data.titulo,
      autor: data.autor,
      precio: data.precio,
      descripcion: data.descripcion ?? '',
      img: IMG_PLACEHOLDER,
      disponible: data.disponible,
    });

    navigate('/catalogo');
  };

  return (
    // Conectamos el handleSubmit de RHF
    <Form onSubmit={handleSubmit(onSubmit)} className="container py-4" style={{ maxWidth: 480 }}>
      <h2>Nuevo libro</h2>

      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control 
          {...register('titulo')} 
          isInvalid={!!errors.titulo} 
        />
        <Form.Control.Feedback type="invalid">
          {errors.titulo?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register('descripcion')}
          isInvalid={!!errors.descripcion}
        />
        <Form.Control.Feedback type="invalid">
          {errors.descripcion?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        <Form.Control 
          {...register('autor')} 
          isInvalid={!!errors.autor} 
        />
        <Form.Control.Feedback type="invalid">
          {errors.autor?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          {...register('precio')}
          isInvalid={!!errors.precio}
        />
        <Form.Control.Feedback type="invalid">
          {errors.precio?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Importante: para componentes de tipo checkbox/radio, react-bootstrap se lleva bien con register directamente */}
      <Form.Check
        className="mb-3"
        label="Disponible"
        {...register('disponible')}
      />

      <Button type="submit">Agregar libro</Button>
    </Form>
  );
}

export default LibroNuevo;