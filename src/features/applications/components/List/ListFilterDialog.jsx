import { useCallback, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import FilterDialog from "~/components/ListFilterDialog";
import {
  APPLICATIONS_CATEGORIES,
  INITIAL_FILTER_STATE,
} from "~/features/applications/constants/filterCategories";
import { useFilterContext } from "~/features/applications/hooks";


const ApplicationsListFilterDialog = ({ anchorEl, open, hide }) => {
  const { applyFilters } = useFilterContext();
  const [filters, setFilters] = useState(INITIAL_FILTER_STATE);

  const handleCheckBoxClick = useCallback((e) => {
    setFilters((curr) => {
      const existing = curr.find((category) => {
        return category.id === e.target.name;
      });
      if (existing) {
        return curr.filter((category) => category.id !== existing.id);
      }
      return [...curr, { id: e.target.name, label: e.target.name }];
    });
  }, []);

  const handleClear = useCallback(() => {
    setFilters(INITIAL_FILTER_STATE);
  }, []);

  const handleApplyClick = useCallback(() => {
    applyFilters(filters);
  }, [applyFilters, filters]);

  return (
    <FilterDialog
      open={open}
      anchorEl={anchorEl}
      title="Categories"
      onApply={handleApplyClick}
      onClear={handleClear}
      onClose={hide}
    >
      <FormGroup>
        {APPLICATIONS_CATEGORIES.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                data-testid="category-checkbox"
                onClick={handleCheckBoxClick}
                name={category}
                checked={Boolean(filters.find((el) => el.id === category))}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
    </FilterDialog>
  );
};

export default ApplicationsListFilterDialog;
