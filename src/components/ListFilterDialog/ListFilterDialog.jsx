import { useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  IconButton,
  Paper,
  Popper,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "./theme";


const ListFilterDialog = ({
  anchorEl,
  title,
  open,
  closeOnApply = true,
  onClose,
  onClear,
  onApply,

  children,
}) => {
  const handleApplyClick = useCallback(() => {
    onApply();
    if (closeOnApply) {
      onClose();
    }
  }, [closeOnApply, onApply, onClose]);

  return (
    <ThemeProvider theme={theme}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        placement={"bottom-end"}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={240}>
            <Paper data-testid="list-filter-dialog">
              <DialogTitle>
                <Typography component="span" variant="h6">
                  Filters
                </Typography>
                <IconButton
                  data-testid="btn-close"
                  title="Close"
                  onClick={onClose}
                  disableRipple
                  disableFocusRipple
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Stack direction="row" justifyContent="space-between">
                  <Typography data-testid="filters-name" component="div">
                    {title}
                  </Typography>
                  <Button onClick={onClear} size="small" variant="text">
                    Clear
                  </Button>
                </Stack>
                {children}
              </DialogContent>
              <DialogActions>
                <Button onClick={onClear}>Clear all</Button>
                <Button
                  size="large"
                  onClick={handleApplyClick}
                  variant="contained"
                >
                  Apply
                </Button>
              </DialogActions>
            </Paper>
          </Fade>
        )}
      </Popper>
    </ThemeProvider>
  );
};

export default ListFilterDialog;
