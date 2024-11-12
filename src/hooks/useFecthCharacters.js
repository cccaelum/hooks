import { useState, useEffect } from 'react';

const useFetchCharacters = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error en la solicitud");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    useEffect(() => {
        fetchData();
      }, [url]);
    
      return { data, error };
    };

export default useFetchCharacters;