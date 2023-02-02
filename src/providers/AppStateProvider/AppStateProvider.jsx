import { useCallback, useState } from "react";
import { AppsStateContextProvider } from "@/context/appContext";


const AppStateProvider = ({ children }) => {
  const [{ search, appliedFilters, page }, setState] = useState({
    search: "",
    appliedFilters: [],
    page: 1,
  });

  const setSearch = useCallback((search) => {
    setState((state) => ({ ...state, search, page: 1 }));
  }, []);

  const applyFilters = useCallback((appliedFilters) => {
    setState((state) => ({ ...state, appliedFilters, page: 1 }));
  }, []);

  const removeAppliedFilter = useCallback((filterId) => {
    setState((state) => ({
      ...state,
      appliedFilters: state.appliedFilters.filter((el) => el.id !== filterId),
      page: 1,
    }));
  }, []);
  const setPage = useCallback((page) => {
    setState((state) => ({ ...state, page }));
  }, []);

  const [data, setData] = useState({ data: [], count: 0 });

  return (
    <AppsStateContextProvider
      value={{
        data,
        setData,
        page,
        setPage,
        search,
        setSearch,
        appliedFilters,
        applyFilters,
        removeAppliedFilter,
      }}
    >
      {children}
    </AppsStateContextProvider>
  );
};

export default AppStateProvider;
