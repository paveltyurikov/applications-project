import { useAppStateContext } from "~/context/appContext.js";


const useSearch = () => {
  const { search, setSearch } = useAppStateContext();
  return { search, setSearch };
};

export default useSearch;
