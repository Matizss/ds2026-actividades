export type Autor = {
  id: number;
  nombre: string;
  nacionalidad: string;
};

export type Libro = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  img: string;
  disponible: boolean;
  autorId: number;
  autor: Autor;
};