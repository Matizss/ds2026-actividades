import { useState, useEffect } from 'react';
import { apiFetch } from '../services/api';

export function useFetch<T>(ruta: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const cargar = async () => {
            try {
                setLoading(true);
                setError(null);
                setData(await apiFetch<T>(ruta, { signal: controller.signal }));
            } catch (e) {
                if (e instanceof DOMException && e.name === 'AbortError') return; // cancelado, no es un error real
                setError(e instanceof Error ? e.message : 'Error desconocido');
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };
        cargar();

        return () => controller.abort(); // se desmontó o cambió `ruta`: cancelamos el fetch anterior
    }, [ruta]);
    return { data, loading, error };
}