import axios from "axios";
import { getApplicationsListUrl } from "../urls/api";


const getApplicationsList = async (filters = {}) => {
  const response = await axios.get(getApplicationsListUrl(), {
    params: filters,
  });
  return response.data;
};

export default getApplicationsList;
