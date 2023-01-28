import { useCallback, useMemo } from "react";
import { DEFAULT_PAGE_SIZE } from "~/constants/config";


export const getPagesCount = (dataLength, pageSize) => {
  const reminder = dataLength % pageSize;
  const divisionResult = dataLength / pageSize;
  return reminder === 0 ? divisionResult : parseInt(divisionResult, 10) + 1;
};

const usePagination = ({
  count,
  onPageChange,
  pageSize = DEFAULT_PAGE_SIZE,
}) => {
  const pagesCount = useMemo(
    () => (count ? getPagesCount(count, pageSize) : 1),
    [count, pageSize]
  );
  return {
    handleSelectPageChanged: useCallback(
      (e) => {
        onPageChange(e.target.value);
      },
      [onPageChange]
    ),
    handlePageChange: useCallback(
      (_, page) => {
        onPageChange(page);
      },
      [onPageChange]
    ),
    pagesCount,
    pageNumbers: useMemo(() => {
      return Array.from(Array(pagesCount || 1).keys(), (item) => item + 1);
    }, [pagesCount]),
  };
};

export default usePagination;
