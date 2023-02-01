import { useState } from "react";


const usePaginationState = (initial = 1) => {
  const [page, setPage] = useState(initial);
  return {
    page,
    setPage,
  };
};

export default usePaginationState;
