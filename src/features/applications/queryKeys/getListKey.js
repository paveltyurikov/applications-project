import { isEmpty } from "lodash";
import { APPLICATIONS_KEY } from "./base";


const getListKey = (filters) => {
  return isEmpty(filters)
    ? [APPLICATIONS_KEY, "list"]
    : [APPLICATIONS_KEY, "list", filters];
};

export default getListKey;
