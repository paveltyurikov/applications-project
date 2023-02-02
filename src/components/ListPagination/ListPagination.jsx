import {
  MenuItem,
  Pagination as MuiPagination,
  Select,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PAGINATION_THEME from "./theme";
import usePagination from "./usePagintion";


const ListPagination = ({ page, count, onPageChange, pageSize }) => {
  const { pagesCount, handlePageChange, handleSelectPageChanged, pageNumbers } =
    usePagination({ count, onPageChange, pageSize });

  return (
    <ThemeProvider theme={PAGINATION_THEME}>
      <Stack
        data-testid="list-pagination"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flex={1}
      >
        <MuiPagination
          color="primary"
          count={pagesCount}
          page={page}
          onChange={handlePageChange}
        />
        <Stack direction="row" alignItems="center">
          <Typography component="div">Go to page</Typography>
          <Select
            key={page}
            onChange={handleSelectPageChanged}
            variant="outlined"
            size="small"
            name="page-select"
            defaultValue={page}
          >
            {pageNumbers.map((number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default ListPagination;
