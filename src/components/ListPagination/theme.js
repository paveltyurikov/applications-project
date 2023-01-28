import { createTheme } from "@mui/material/styles";
import { THEME_COMMON_ROOT } from "~/constants/defaultTheme";


const PAGINATION_THEME = createTheme({
  ...THEME_COMMON_ROOT,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingRight: theme.spacing(1),
          color: theme.palette.text.disabled,
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          backgroundColor: "rgb(255,255,255)",
          color: theme.palette.text.disabled,
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.disabled,
        }),
      },
    },
  },
});

export default PAGINATION_THEME;
