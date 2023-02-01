import Fuse from "fuse.js";
import { rest } from "msw";
import { DEFAULT_PAGE_SIZE } from "~/constants/config";
import {
  getApplicationsListUrl,
  NOTIFY_ME_PATH,
} from "~/features/applications/urls/api";
import applicationListData from "../../json/applications/get-list.json";


const getPage = (array, page = 1) => {
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end = start + DEFAULT_PAGE_SIZE;
  return array.slice(start, end);
};

const filterListByCategories = (applications, categories) => {
  const res = [];
  applications.forEach((item) => {
    item.categories.forEach((category) => {
      if (categories.includes(category)) {
        res.push(item);
      }
    });
  });
  return res;
};
export const APPLICATIONS_HANDLERS = [
  rest.get(getApplicationsListUrl(), (req, res, ctx) => {
    let data = applicationListData;
    const page = req.url.searchParams.get("page") || 1;
    const search = req.url.searchParams.get("search");
    const categories = req.url.searchParams.getAll("categories[]") || [];
    if (categories.length) {
      data = filterListByCategories(applicationListData, categories);
    }
    if (search) {
      const fuse = new Fuse(data, {
        threshold: 0.3,
        findAllMatches: true,
        ignoreLocation: true,
        keys: ["title", "description"],
      });
      data = fuse.search(search).map((item) => item.item);
    }
    return res(
      ctx.json({
        data: getPage(data, page),
        count: data.length,
      })
    );
  }),
  rest.post(NOTIFY_ME_PATH, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}));
  }),
];
