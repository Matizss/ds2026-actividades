import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiFetch } from '../services/api';
import { guardarToken } from '../services/sesion';
import { useState } from 'react';

const loginSchema = z.object({
  email: z.string().trim().min(1, 'El email es obligatorio').email('Email inválido'),
  password: z.string().min(1, 'La contraseña es obligatoria'),
});

type LoginForm = z.infer<typeof loginSchema>;

type LoginResponse = {
  token: string;
  usuario: { id: number; email: string; nombre: string; rol: 'ADMIN' | 'CLIENTE' };
};

function Login() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm) => {
    setErrorApi(null);
    setEnviando(true);
    try {
      const resultado = await apiFetch<LoginResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      guardarToken(resultado.token);
      navigate('/catalogo');
    } catch (e) {
      setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="container py-4" style={{ maxWidth: 400 }}>
      <h2>Iniciar sesión</h2>

      {errorApi && <Alert variant="danger">{errorApi}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control {...register('email')} isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" {...register('password')} isInvalid={!!errors.password} />
        <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={enviando}>
        {enviando ? 'Ingresando...' : 'Ingresar'}
      </Button>
    </Form>
  );
}

export default Login;