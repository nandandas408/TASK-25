import { useEffect, useState } from "react";

const useFetch = (url, offset, limit) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const page = result.slice(offset, offset + limit);
        setData(page);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, limit, offset]);
  return { data, loading, error };
};
export default useFetch;