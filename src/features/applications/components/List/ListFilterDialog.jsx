import { useCallback, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import FilterDialog from "@/components/ListFilterDialog";
import {
  APPLICATIONS_CATEGORIES,
  INITIAL_FILTER_STATE,
} from "@/features/applications/constants/filterCategories";
import { useFilter } from "@/hooks";


const ApplicationsListFilterDialog = ({ anchorEl, open, hide }) => {
  const { applyFilters } = useFilter();
  const [selectedCategories, setSelectedCategories] =
    useState(INITIAL_FILTER_STATE);

  const handleCheckBoxClick = useCallback((e) => {
    setSelectedCategories((curr) => {
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
    setSelectedCategories(INITIAL_FILTER_STATE);
  }, []);

  const handleApplyClick = useCallback(() => {
    applyFilters(selectedCategories);
  }, [applyFilters, selectedCategories]);

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
                checked={Boolean(
                  selectedCategories.find((el) => el.id === category)
                )}
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
