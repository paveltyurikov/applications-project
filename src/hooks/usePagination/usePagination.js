import { useAppStateContext } from "~/context/appContext.js";


const usePagination = () => {
  const { page, setPage } = useAppStateContext();
  return { page, setPage };
};

export default usePagination;
