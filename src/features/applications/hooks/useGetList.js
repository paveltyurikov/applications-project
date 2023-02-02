import { useQuery } from "react-query";
import getApplicationsList from "../api/getList";
import getApplicationsListKey from "../queryKeys/getListKey";


const useApplicationsList = (filters = {}, options = {}) => {
  const KEY = getApplicationsListKey(filters);
  return useQuery(KEY, () => getApplicationsList(filters), options);
};

export default useApplicationsList;
