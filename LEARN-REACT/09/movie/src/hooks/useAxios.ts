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
        const { data } = await axiosInstance(url);
        setData(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'unknown');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
}
