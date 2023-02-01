import { DEFAULT_PAGE_SIZE } from "~/constants/config.js";


export const getRowsDisplayedRange = ({
  page,
  count,
  pageSize = DEFAULT_PAGE_SIZE,
}) => {
  const from = pageSize * (page - 1) + 1;
  const to = Math.min(count, from + Number(pageSize) - 1);
  return count === 0
    ? {
        from: 0,
        to: count,
      }
    : {
        from,
        to,
      };
};

export const formatRange = ({ from, to, count }) =>
  `Showing ${from}-${to} - of ${count} apps`;
