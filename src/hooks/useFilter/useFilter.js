import { useAppStateContext } from "~/context/appContext.js";


const useFilter = () => {
  const { appliedFilters, applyFilters, removeAppliedFilter } =
    useAppStateContext();
  return { appliedFilters, applyFilters, removeAppliedFilter };
};

export default useFilter;
