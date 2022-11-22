import { useCallback } from "react";
import { toast } from "react-toastify";

import { Task, Transaction } from "../types";

const useAPI = () => {
  const getTasks = useCallback(async (): Promise<Task[]> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });

      if (response.status !== 200) {
        toast(`API request failed`, { type: "error" });

        return [];
      }

      return await response.json();
    } catch (e) {
      console.log(e);

      toast(`API request failed`, { type: "error" });
    }

    return [];
  }, []);

  const getAuthenticate = useCallback(
    async (email: string, password: string): Promise<any> => {
      const body = JSON.stringify({ email, password });
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/authenticate`,
          {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
              Accept: "application.json",
              "Content-Type": "application/json",
            },
            body: body,
          }
        );

        if (response.status !== 200) {
          toast(`API request failed`, { type: "error" });

          return [];
        }

        return await response.json();
      } catch (e) {
        console.log(e);

        toast(`API request failed`, { type: "error" });
      }

      return [];
    },
    []
  );

  const getTransactions = useCallback(
    async (pageNumber: number): Promise<{ [key: string]: Transaction }> => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/transactions?page=${pageNumber}`,
          {
            method: "GET",
            mode: "cors",
            credentials: "include",
          }
        );

        if (response.status !== 200) {
          toast(`API request failed`, { type: "error" });

          return {};
        }

        return await response.json();
      } catch (e) {
        console.log(e);

        toast(`API request failed`, { type: "error" });
      }

      return {};
    },
    []
  );

  return {
    getTasks,
    getAuthenticate,
    getTransactions,
  };
};

export default useAPI;
