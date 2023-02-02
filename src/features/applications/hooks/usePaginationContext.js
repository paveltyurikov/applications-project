import { useContext } from "react";
import { PaginationContext } from "~/features/applications/context";


const usePaginationContext = () => {
  const value = useContext(PaginationContext);
  if (!value) {
    throw Error("usePaginationContext should be used inside PaginationContext");
  }
  return value;
};

export default usePaginationContext;
