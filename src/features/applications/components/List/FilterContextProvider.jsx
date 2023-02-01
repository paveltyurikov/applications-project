import { useMemo } from "react";
import {
  FilterContext,
  PaginationContext,
} from "~/features/applications/context.js";
import {
  useFilterState,
  usePaginationState,
} from "~/features/applications/hooks";


const FilterContextProvider = ({ children }) => {
  const { appliedFilters, applyFilters, removeAppliedFilter } = useFilterState(
    []
  );
  const { page, setPage } = usePaginationState(1);

  const filterContextValue = useMemo(
    () => ({
      applyFilters,
      appliedFilters,
      removeAppliedFilter,
    }),
    [appliedFilters, applyFilters, removeAppliedFilter]
  );
  const paginationContextValue = useMemo(() => ({ page, setPage }), [page]);

  return (
    <FilterContext.Provider value={filterContextValue}>
      <PaginationContext.Provider value={paginationContextValue}>
        {children}
      </PaginationContext.Provider>
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
