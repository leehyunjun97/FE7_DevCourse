import { useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosinstance';

export default function useAxios<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(url);
        setData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'unknown error');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
}
