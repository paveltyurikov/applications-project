import { DEFAULT_PAGE_SIZE } from "@/constants/config.js";
import APPLICATIONS_LIST from "@/mocks/get-applications-list.json";


const filterByCategories = (data, categories) =>
  data.reduce((acc, curr) => {
    curr.categories.forEach((category) => {
      if (categories.includes(category)) {
        acc.push(curr);
      }
    });
    return acc;
  }, []);

const filterBySearch = (data = [], search = "") => {
  const re = new RegExp(`${search}`, "gim");
  return data.filter(
    (category) => category.title.match(re) || category.description.match(re)
  );
};

const getDataPage = (data, page) => {
  const nextData = [...data];
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end =
    start + DEFAULT_PAGE_SIZE > data.length
      ? data.length
      : start + DEFAULT_PAGE_SIZE;
  return nextData.slice((page - 1) * DEFAULT_PAGE_SIZE, end);
};

const getData = (data = [], filters) => {
  const { search, page, categories } = filters;
  let nextData = data;
  let count = data.length;
  if (categories.length > 0) {
    nextData = filterByCategories(data, categories);
    count = nextData.length;
  }
  if (search) {
    nextData = filterBySearch(nextData, search);
    count = nextData.length;
  }
  if (page) {
    nextData = getDataPage(nextData, page);
  }
  return { data: nextData, count };
};

const useApplicationsList = (filters = {}) => {
  return {
    data: getData(APPLICATIONS_LIST, filters),
  };
};

export default useApplicationsList;
