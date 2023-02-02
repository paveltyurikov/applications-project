import { createTheme } from "@mui/material/styles";
import { THEME_COMMON_ROOT } from "@/constants/defaultTheme";


const APPLIED_FILTERS_THEME = createTheme({
  ...THEME_COMMON_ROOT,
  components: {
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginTop: theme.spacing(3),
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          margin: theme.spacing(0.5),
        }),
      },
    },
  },
});

export default APPLIED_FILTERS_THEME;
