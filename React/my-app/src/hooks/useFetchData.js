import { useEffect, useState } from "react";

export const useFetchData = (
  url = "",
  options = { method: "GET" },
  defaultDataValue = null
) => {
  const [data, setData] = useState({ data: defaultDataValue, error: null });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const jsonData = await fetch(url, options);
        const data = await jsonData.json();
        setData({ data, error: null });
      } catch (error) {
        setData({ data: null, error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, options]);

  return [data, isLoading];
};
