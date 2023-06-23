import React from "react";
import { HashRouter } from "react-router-dom";
import MainApp from "./routes/MainApp";
import { createTheme, ThemeProvider } from "@mui/material";
import { useThemeHook } from "./hooks/useTheme";

export default function App() {
  const theme = createTheme(useThemeHook());
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <MainApp />
      </ThemeProvider>
    </HashRouter>
  );
}
