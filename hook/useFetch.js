import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

export const useFetch = (endpoint, query) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios(options);
      setdata(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
