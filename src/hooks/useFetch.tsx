import { useEffect, useState, useCallback } from "react";

type State<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: boolean;
};

const initialState = {
  data: undefined,
  isLoading: true,
  error: false,
};

export function useFetch<T>(url: string) {
  const [state, setState] = useState<State<T>>(initialState);

  const getFecth = useCallback(async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      error: false,
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getFecth();
    console.log("useFetch");
  }, [url, getFecth]);

  if (!state.data) {
    return {
      data: undefined,
      isLoading: true,
      error: true,
    };
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
}
