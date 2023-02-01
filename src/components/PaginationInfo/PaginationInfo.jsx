import { Typography } from "@mui/material";
import {
  formatRange,
  getRowsDisplayedRange,
} from "~/components/PaginationInfo/lib.js";


const PaginationInfo = ({ page, count }) => {
  const { from, to } = getRowsDisplayedRange({ page, count });
  return (
    <Typography
      data-testid="pagination-info"
      component="div"
      variant="title"
      sx={{ fontWeight: 600 }}
    >
      {formatRange({ from, to, count })}
    </Typography>
  );
};

export default PaginationInfo;
