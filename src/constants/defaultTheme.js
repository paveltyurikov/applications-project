import { createTheme } from "@mui/material/styles";


export const THEME_COMMON_ROOT = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "rgb(81, 103, 245)",
    },
  },
};

const DEFAULT_THEME = createTheme({
  ...THEME_COMMON_ROOT,
});

export default DEFAULT_THEME;
