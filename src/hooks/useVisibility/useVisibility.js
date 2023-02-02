import { useCallback, useState } from "react";


const useVisibility = (initial = false) => {
  const [visibility, setVisibility] = useState(initial);
  return {
    visibility,
    show: useCallback(() => {
      setVisibility(true);
    }, []),
    hide: useCallback(() => {
      setVisibility(false);
    }, []),
    toggle: useCallback(() => {
      setVisibility((current) => !current);
    }, []),
  };
};

export default useVisibility;
