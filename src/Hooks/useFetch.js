import { useState, useEffect } from "react";

export const useFetch = (urlPage, dataInfo = {}, id = true) => {
  const url = `https://hajjcms.herokuapp.com/${urlPage}`;
  const [state, setState] = useState({
    data: dataInfo,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
