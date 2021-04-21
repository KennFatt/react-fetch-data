import React, { useState, useEffect } from "react";
import axios from "axios";

type DataHandler<T> = [
  {
    data: T;
    isLoading: boolean;
  },
  React.Dispatch<React.SetStateAction<T>>
];

const useDataApi = <T>(endpointUrl: string, initialData: T): DataHandler<T> => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [_, setIsError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios(endpointUrl);

        setData(response.data);
        setIsLoading(false);
      } catch {
        setIsError(() => {
          throw new Error("Couldn't fetch the data from API server!");
        });
      }
    };

    fetchData();
  }, []);

  return [{ data, isLoading }, setData];
};

export { useDataApi };
