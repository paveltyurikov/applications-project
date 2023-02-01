import { useContext } from "react";
import { FilterContext } from "~/features/applications/context";


const useFilterContext = () => {
  const value = useContext(FilterContext);
  if (!value) {
    throw Error("useFilterContext should be used inside FilterContext");
  }
  return value;
};

export default useFilterContext;
