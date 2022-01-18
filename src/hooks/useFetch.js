import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (baseUrl) => {

  const [loading, setLoading] = useState(true),
    [data, setData] = useState(null),
    [singleData, setSingleData] = useState(null),
    [error, setError] = useState(null),
    [isMounted, setIsMounted] = useState(true);
  //create an instance of axios
  const api = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get();
        if (isMounted) {
          setData(response.data.results);
          setSingleData(response.data)
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    setIsMounted(false);

    // eslint-disable-next-line
  }, []);

  return {data, singleData, loading, error}
};

export default useFetch;
