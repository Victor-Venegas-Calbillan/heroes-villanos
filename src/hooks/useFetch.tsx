import { useEffect, useState, useCallback } from "react";
import { HeroResp } from "../interfaces/hero";

type State = {
  data: HeroResp[] | null;
  isLoading: boolean;
  error: boolean;
};

const initialState: State = {
  data: null,
  isLoading: true,
  error: false,
};

export const useFetch = (url: string) => {
  const [state, setState] = useState(initialState);

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
    console.log("effect");
  }, [url, getFecth]);

  if (!state.data) {
    return {
      data: [],
      isLoading: true,
      error: true,
    };
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
