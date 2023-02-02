import { createTheme } from "@mui/material/styles";


export const THEME_COMMON_ROOT = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "rgb(81, 103, 245)",
    },
    background: {
      default: "rgb(243,247, 249)",
    },
  },
};

export const BUTTON_OVERRIDES = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
    defaultProps: {
      disableElevation: true,
    },
  },
  MuiContainer: {
    styleOverrides: {
      maxWidthLg: ({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
          maxWidth: 1440,
        },
      }),
    },
  },
};

const DEFAULT_THEME = createTheme({
  ...THEME_COMMON_ROOT,
  components: {
    ...BUTTON_OVERRIDES,
  },
});

export default DEFAULT_THEME;
