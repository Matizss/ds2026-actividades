// LibroNuevo.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import type { Libro } from '../types/libro';
import { z } from 'zod';
import { libroSchema } from '../schemas/libroSchema';

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro';

interface Props {
  onAgregar: (libro: Libro) => void;
}

function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    precio: '',
    descripcion: '',
    disponible: true,
  });
  
  const [errores, setErrores] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resultado = libroSchema.safeParse(form);
    
    if (!resultado.success) {
      const err: Record<string, string> = {};
      
      for (const issue of resultado.error.issues) {
        const campo = String(issue.path[0]);
        if (!err[campo]) {
          err[campo] = issue.message;
        }
      }
      
      setErrores(err);
      return;
    }
    
    setErrores({});
    
    // Si limpia los errores previos antes de avanzar (Buena práctica alternativa)
    setErrores({});
    
    onAgregar({
      id: Date.now(),
      titulo: resultado.data.titulo,
      autor: resultado.data.autor,
      precio: resultado.data.precio,
      descripcion: resultado.data.descripcion,
      img: IMG_PLACEHOLDER,
      disponible: resultado.data.disponible,
    });
    
    navigate('/catalogo');
  };

  return (
    <Form onSubmit={handleSubmit} className="container py-4" style={{ maxWidth: 480 }}>
      <h2>Nuevo libro</h2>
      
      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control 
          name="titulo" 
          value={form.titulo} 
          onChange={handleChange} 
          isInvalid={!!errores.titulo} 
        />
        <Form.Control.Feedback type="invalid">
          {errores.titulo}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control 
            as="textarea"
            rows={3}
            name="descripcion" 
            value={form.descripcion} 
            onChange={handleChange} 
            isInvalid={!!errores.descripcion}
        />
        <Form.Control.Feedback type="invalid">
          {errores.descripcion} 
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        <Form.Control 
          name="autor" 
          value={form.autor} 
          onChange={handleChange} 
          isInvalid={!!errores.autor} 
        />
        <Form.Control.Feedback type="invalid">
          {errores.autor}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control 
          type="number" 
          name="precio" 
          value={form.precio} 
          onChange={handleChange} 
          isInvalid={!!errores.precio} 
        />
        <Form.Control.Feedback type="invalid">
          {errores.precio}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Check 
        className="mb-3" 
        label="Disponible" 
        name="disponible" 
        checked={form.disponible} 
        onChange={handleChange}
      />
      
      <Button type="submit">Agregar libro</Button>
    </Form>
  );
}

export default LibroNuevo;