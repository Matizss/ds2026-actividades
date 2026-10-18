import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import type { Usuario, Rol } from '../../types/sesionType';
import Header from './Header';

// Arrange común: el Header necesita router y AuthContext. Le damos un auth falso.
function renderHeader(usuario: Usuario | null) {
  const auth = {
    usuario,
    cargando: false,
    estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol,
    login: vi.fn(),
    logout: vi.fn(),
  };
  return render(
    <MemoryRouter>
      <AuthContext.Provider value={auth}>
        <Header />
      </AuthContext.Provider>
    </MemoryRouter>,
  );
}

describe('Header según el rol', () => {
  it('sin sesión: muestra "Ingresar" y NO muestra "Nuevo libro"', () => {
    renderHeader(null);
    expect(screen.getByRole('button', { name: 'Ingresar' })).toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });

  it('CLIENTE: saluda por nombre, muestra "Salir" y NO muestra "Nuevo libro"', () => {
    renderHeader({ id: 2, email: 'cliente@libreria.com', nombre: 'Cliente Uno', rol: 'CLIENTE' });
    expect(screen.getByText(/Hola, Cliente Uno/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Salir' })).toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });

  it('ADMIN: ve el link "Nuevo libro"', () => {
    renderHeader({ id: 1, email: 'admin@libreria.com', nombre: 'Admin', rol: 'ADMIN' });
    expect(screen.getByRole('link', { name: 'Nuevo libro' })).toBeInTheDocument();
  });
});
