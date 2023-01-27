import React from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import DEFAULT_THEME from "~/constants/defaultTheme.js";


const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={DEFAULT_THEME}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
export default ThemeProvider;
