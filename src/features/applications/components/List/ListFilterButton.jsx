import { useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Button } from "@mui/material";
import useVisibility from "~/hooks/useVisibility";
import ApplicationsListFilterDialog from "./ListFilterDialog";


export const FILTER_BUTTON_SX = {
  marginRight: (theme) => theme.spacing(-1.5),
  padding: (theme) => theme.spacing(0, 2),
  height: "100%",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  backgroundColor: (theme) => `${theme.palette.background.default} !important`,
  color: (theme) => theme.palette.text.disabled,
  borderLeft: "1px solid",
  borderLeftColor: (theme) => theme.palette.text.disabled,
  outline: "none !important",
};
const ListFilterButton = () => {
  const { visibility, hide, toggle } = useVisibility();
  const ref = useRef(null);
  return (
    <>
      <Button
        ref={ref}
        onClick={toggle}
        variant="text"
        endIcon={visibility ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        sx={FILTER_BUTTON_SX}
      >
        Filters
      </Button>
      <ApplicationsListFilterDialog
        anchorEl={ref.current}
        open={visibility}
        hide={hide}
      />
    </>
  );
};

export default ListFilterButton;
