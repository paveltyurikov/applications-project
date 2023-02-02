import { useCallback, useState } from "react";


const useFilterState = (initialState) => {
  const [appliedFilters, setAppliedFilters] = useState(initialState);
  return {
    appliedFilters,
    applyFilters: useCallback((filters) => {
      setAppliedFilters(filters);
    }, []),
    removeAppliedFilter: useCallback((filterId) => {
      setAppliedFilters((curr) =>
        curr.filter((appliedFilter) => appliedFilter.id !== filterId)
      );
    }, []),
  };
};

export default useFilterState;
