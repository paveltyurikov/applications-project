import { createTheme } from "@mui/material/styles";
import { THEME_COMMON_ROOT } from "~/constants/defaultTheme";


const PAGINATION_THEME = createTheme({
  ...THEME_COMMON_ROOT,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: theme.spacing(44),
          transform: `translate(1px, ${theme.spacing(1)})`,
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& > div.filters-name-block": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: theme.spacing(-1.5),
          },
          "& > .MuiTypography-root.filters-name": {
            fontWeight: 600,
          },
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 3, 3, 3),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.btn-close": {
            marginRight: theme.spacing(-1),
          },
        }),
      },
    },
  },
});

export default PAGINATION_THEME;
