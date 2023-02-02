import { Chip, Stack, ThemeProvider } from "@mui/material";
import APPLIED_FILTERS_THEME from "@/components/AppliedFilters/theme";


const AppliedFilters = ({
  appliedFilters = [],
  removeAppliedFilter,
  theme = APPLIED_FILTERS_THEME,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack data-testid="applied-filters" direction="row" flexWrap="wrap">
        {appliedFilters.map((filter) => (
          <Chip
            data-testid="applied-filter"
            key={filter.id}
            size="small"
            label={filter.label}
            onDelete={() => removeAppliedFilter(filter.id)}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
};

export default AppliedFilters;
