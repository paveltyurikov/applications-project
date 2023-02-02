import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import validateEmail from "~/lib/validateEmail";

/**
 * NotifyMeDialog component
 * @param {bool} open - is dialog open
 * @param {func} hide - close dialog callback
 */
const NotifyMeDialog = ({ open, hide }) => {
  const [email, setEmail] = useState({ email: "", isError: false });

  const handleInputChange = useCallback((e) => {
    setEmail((curr) => ({ ...curr, email: e.target.value, isError: false }));
  }, []);

  const handleSubmitClick = () => {
    if (Boolean(email.email) && !validateEmail(email.email)) {
      setEmail((curr) => ({ ...curr, isError: true }));
    } else {
      setEmail(() => ({ email: "", isError: false }));
      hide();
    }
  };

  return (
    <Dialog open={open} maxWidth="sm">
      <DialogTitle
        align="right"
        sx={{ marginRight: (theme) => theme.spacing(-1) }}
      >
        <IconButton
          data-testid="btn-close"
          onClick={hide}
          disableRipple
          disableFocusRipple
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          component="div"
          sx={{ marginBottom: (theme) => theme.spacing(2) }}
        >
          <Typography data-testid="dialog-title" component="div" variant="h6">
            Thank you for your interest
          </Typography>
          <Typography data-testid="dialog-message">
            We still working on integrating this app it's not yet ready for now.
            But you can send us your email so we can let you know when it's
            ready
          </Typography>
        </DialogContentText>
        <TextField
          id="email-input"
          type="email"
          onChange={handleInputChange}
          autoFocus
          placeholder="email@email.com"
          label="Email"
          fullWidth
          error={email.isError}
          helperText={email.isError ? "Invalid email address" : undefined}
        />
      </DialogContent>
      <DialogActions sx={{ padding: (theme) => theme.spacing(2, 3, 3, 3) }}>
        <Button onClick={hide} variant="outlined">
          Never mind
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmitClick}
          disabled={email.isError}
        >
          Notify me
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotifyMeDialog;
