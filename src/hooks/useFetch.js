import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (baseUrl) => {

  const [loading, setLoading] = useState(true),
    [data, setData] = useState(null),
    [error, setError] = useState(null),
    [isMounted, setIsMounted] = useState(true);
  //create an instance of axios
  const api = axios.create({
    baseURL: baseUrl,
    params: { _limit: 7 },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get();
        //console.log(response.data.results);
        if (isMounted) {
          setData(response.data.results);
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

  return {data, loading, error}
};

export default useFetch;
